import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT, PRODUCTS } from "../../data/site";
import Icon from "../ui/Icon";

const EMPTY = {
  full_name: "",
  phone: "",
  email: "",
  company: "",
  product: "",
  message: "",
};

/**
 * Enquiry form.
 *
 * Posts to the site's existing PHP endpoint (`/send-mail.php`, same field names
 * as the original website) and only shows a success state when the server
 * answers with a 2xx. If the endpoint is unreachable the user is told so and
 * given the real phone / email fallbacks — never a fake confirmation.
 */
export default function EnquiryForm({
  product = "",
  title = "Send an Enquiry",
  compact = false,
}) {
  const [params] = useSearchParams();
  const [values, setValues] = useState({ ...EMPTY, product });
  const [state, setState] = useState({ status: "idle", message: "" });
  const [needsCaptcha, setNeedsCaptcha] = useState(false);
  const captchaSlot = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const q = params.get("product");
    if (q && PRODUCTS.some((p) => p.name === q))
      setValues((v) => ({ ...v, product: q }));
  }, [params]);

  /* reCAPTCHA: only attempted once the user actually needs to submit, so the
     third-party script never blocks first paint. If it fails to load, the form
     still works (server-side validation remains the gate). */
  function loadCaptcha() {
    if (window.grecaptcha || needsCaptcha) return;
    setNeedsCaptcha(true);
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha && captchaSlot.current) {
        window.grecaptcha.render(captchaSlot.current, {
          sitekey: CONTACT.recaptchaSiteKey,
        });
      }
    };
    document.head.appendChild(script);
  }

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setState({ status: "sending", message: "" });

    const body = new FormData(form);
    /* recaptcha token (if the widget rendered) */
    try {
      const token = document.querySelector("#g-recaptcha-response");
      if (token && token.value)
        body.append("g-recaptcha-response", token.value);
    } catch {
      /* ignore — endpoint validates server-side */
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        body,
        headers: { "X-Requested-With": "XMLHttpRequest" },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState({ status: "success", message: "" });
      setValues({ ...EMPTY, product: "" });
      form.reset();
      if (window.grecaptcha) window.grecaptcha.reset();
    } catch {
      clearTimeout(timer);
      setState({ status: "error", message: "" });
    }
  }

  const sending = state.status === "sending";

  return (
    <div className="relative overflow-hidden rounded-panel border border-ink-line/70 bg-white p-5 shadow-premium sm:p-7 lg:p-8">
      {/* accent rail + soft wash */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-light to-brand"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 blur-3xl"
      />

      <div className="relative mb-6 flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-brand text-white shadow-lg ring-1 ring-white/10">
          <Icon name="mail" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-[1.2rem] leading-tight sm:text-[1.35rem]">
            {title}
          </h2>
          <p className="mt-1 text-[0.84rem] leading-relaxed text-ink-muted">
            Share your product requirement and our engineering desk will get
            back to you.
          </p>
        </div>
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate className="relative">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full name"
            name="full_name"
            required
            value={values.full_name}
            onChange={update}
            placeholder="Your name"
            autoComplete="name"
          />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={update}
            placeholder="+91 00000 00000"
            autoComplete="tel"
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={update}
            placeholder="email@company.com"
            autoComplete="email"
          />
          <Field
            label="Company / organisation"
            name="company"
            value={values.company}
            onChange={update}
            placeholder="Your company name"
            autoComplete="organization"
          />

          <div className="sm:col-span-2">
            <label
              htmlFor="product"
              className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-muted"
            >
              Product / component <span className="text-accent">*</span>
            </label>
            <select
              id="product"
              name="product"
              required
              value={values.product}
              onChange={(e) => update("product", e.target.value)}
              className="w-full rounded-[10px] border border-ink-line bg-white px-3.5 py-3 text-[0.95rem] text-ink transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            >
              <option value="">-- Select a Product --</option>
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-muted"
            >
              Requirements / message
            </label>
            <textarea
              id="message"
              name="message"
              rows={compact ? 3 : 4}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Part name, polymer material, mould cavities, annual volume…"
              className="w-full resize-y rounded-[10px] border border-ink-line bg-white px-3.5 py-3 text-[0.95rem] text-ink transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            />
          </div>

          <div className="sm:col-span-2">
            <div ref={captchaSlot} className="min-h-0" />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            onFocus={loadCaptcha}
            onMouseEnter={loadCaptcha}
            disabled={sending}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Sending…" : "Send Enquiry"}
            {!sending && <Icon name="arrowRight" />}
          </button>
          <a
            href={`mailto:${CONTACT.emailSupport}`}
            className="btn btn-outline"
          >
            <Icon name="mail" /> Email us
          </a>
        </div>

        <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-muted">
          Fields marked <span className="text-accent">*</span> are required. By
          submitting you agree to be contacted about your enquiry.
        </p>

        <div aria-live="polite" className="mt-4">
          {state.status === "success" && (
            <div className="rounded-[10px] border border-green-600/30 bg-green-50 px-4 py-3.5 text-[0.9rem] leading-relaxed text-green-800">
              <strong className="block">
                Thank you — your enquiry has been sent.
              </strong>
              Our team will contact you shortly. For urgent requirements call{" "}
              <a
                className="font-semibold underline"
                href={`tel:${CONTACT.phone1Href}`}
              >
                {CONTACT.phone1}
              </a>
              .
            </div>
          )}
          {state.status === "error" && (
            <div className="rounded-[10px] border border-red-600/25 bg-red-50 px-4 py-3.5 text-[0.9rem] leading-relaxed text-red-800">
              <strong className="block">
                Your enquiry could not be sent right now.
              </strong>
              Please call{" "}
              <a
                className="font-semibold underline"
                href={`tel:${CONTACT.phone1Href}`}
              >
                {CONTACT.phone1}
              </a>{" "}
              or email{" "}
              <a
                className="font-semibold underline"
                href={`mailto:${CONTACT.emailSupport}`}
              >
                {CONTACT.emailSupport}
              </a>
              .
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-muted"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-[10px] border border-ink-line bg-white px-3.5 py-3 text-[0.95rem] text-ink transition placeholder:text-[#a3adba] focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
