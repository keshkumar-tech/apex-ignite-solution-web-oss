import { Link } from "react-router-dom";
import useSeo from "../../lib/useSeo";
import { CONTACT, PENDING_ITEMS } from "../../data/site";
import Icon from "../../components/ui/Icon";
import {
  Button,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  Notice,
  PageBanner,
  Section,
} from "../../components/ui/Primitives";
import AboutSidebar from "../../components/sections/AboutSidebar";

export default function DirectorMessage() {
  useSeo({
    title: "Director's Message",
    description:
      "Leadership at Apex Ignite Solutions Pvt. Ltd. — Mr. Ajay Pal Makker and Mr. Abhimanyu. The company is a direct-on-line tier-1 supplier to M/S Minda Corporation Ltd. and has been manufacturing since 1993.",
    path: "/director-message",
    image: "/images/oil-guage.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Leadership"
        title="Director's Message"
        description="Leadership insights and vision from the directors of Apex Ignite Solutions Pvt. Ltd."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="grid gap-7 sm:grid-cols-[240px_minmax(0,1fr)] sm:items-start">
              <div className="overflow-hidden rounded-panel bg-surface-light">
                <img
                  src="/images/oil-guage.webp"
                  alt="Oil gauge meter components moulded by Apex Ignite"
                  loading="lazy"
                  width="480"
                  height="600"
                  className="aspect-[4/4.6] w-full object-cover"
                />
              </div>
              <div>
                <Eyebrow>Leadership</Eyebrow>
                <h2 className="mb-3 text-[clamp(1.4rem,2.4vw,2rem)]">
                  The people who started it
                </h2>
                <ul className="grid gap-3">
                  {CONTACT.directors.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 rounded-xl border border-ink-line bg-white p-4"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/[0.08] text-brand">
                        <Icon name="user" className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <strong className="block text-[0.95rem] text-navy">
                          {d}
                        </strong>
                        <span className="text-[0.78rem] uppercase tracking-[0.1em] text-ink-muted">
                          Managing Director
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.92rem] leading-[1.75] text-ink-muted">
                  The company was started in 1993 by Mr. Ajay Pal Makker with
                  just three hand moulding machines — the first entry in the
                  company&apos;s own milestone record.
                </p>
              </div>
            </div>

            <div className="mt-9">
              <Notice title="Message text pending verification">
                {PENDING_ITEMS.directorMessage}
              </Notice>
            </div>

            <div className="mt-9 rounded-panel border border-ink-line bg-white p-6 sm:p-8">
              <h3 className="mb-4 text-[1.2rem]">
                What the company states publicly
              </h3>
              <CheckList
                items={[
                  "Direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.",
                  "IATF 16949:2016 Certified (Valid till 31st Mar 2028)",
                  "Gold Certificate in ZED (Ministry of MSME)",
                  "ISO 14001:2015 & ISO 45001:2018 Certified at both plants",
                  "Green Supplier as per MSIL T2 Vendor Assessment System",
                ]}
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/awards-achievements"
                  variant="navy"
                  icon="arrowRight"
                >
                  Awards &amp; Achievements
                </Button>
                <Button to="/mission-vision" variant="outline">
                  Mission &amp; Vision
                </Button>
              </div>
            </div>

            <div className="mt-8 rounded-panel border border-ink-line bg-surface-light p-6">
              <h3 className="mb-2 text-[1.05rem]">
                Speak to leadership directly
              </h3>
              <p className="mb-4 text-[0.9rem] leading-relaxed text-ink-muted">
                The original website publishes these direct contacts for the
                managing directors.
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT.email1}`}
                  className="flex items-center gap-2.5 rounded-[10px] border border-ink-line bg-white px-4 py-3 text-[0.88rem] transition-colors hover:border-brand"
                >
                  <Icon name="mail" className="h-4 w-4 text-accent" />
                  <span className="truncate">{CONTACT.email1}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email2}`}
                  className="flex items-center gap-2.5 rounded-[10px] border border-ink-line bg-white px-4 py-3 text-[0.88rem] transition-colors hover:border-brand"
                >
                  <Icon name="mail" className="h-4 w-4 text-accent" />
                  <span className="truncate">{CONTACT.email2}</span>
                </a>
              </div>
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      <div className="bg-surface-light">
        <Container className="py-10">
          <p className="text-[0.86rem] text-ink-muted">
            Looking for the company overview instead?{" "}
            <Link
              to="/about-us"
              className="font-medium text-brand underline underline-offset-2"
            >
              Read the About Apex Ignite overview
            </Link>
            .
          </p>
        </Container>
      </div>

      <CtaBand title="Have a question for our leadership team?" />
    </>
  );
}
