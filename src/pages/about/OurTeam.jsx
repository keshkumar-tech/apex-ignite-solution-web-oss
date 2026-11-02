import useSeo from "../../lib/useSeo";
import { CONTACT, PENDING_ITEMS } from "../../data/site";
import Icon from "../../components/ui/Icon";
import {
  Button,
  CheckList,
  CtaBand,
  Eyebrow,
  Notice,
  PageBanner,
  Section,
} from "../../components/ui/Primitives";
import AboutSidebar from "../../components/sections/AboutSidebar";

export default function OurTeam() {
  useSeo({
    title: "Our Team",
    description:
      "The people behind Apex Ignite Solutions Pvt. Ltd. — led by managing directors Mr. Ajay Pal Makker and Mr. Abhimanyu, supported by in-house tooling, design, production and quality teams at Faridabad and Haridwar.",
    path: "/our-team",
    image: "/images/electrical-star4ter.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="People"
        title="Our Team"
        description="Meet the people behind our success — leadership, in-house tooling, design, production and quality teams across both plants."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mb-5 text-[clamp(1.4rem,2.4vw,1.9rem)]">
              Managing Directors
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {CONTACT.directors.map((name) => (
                <article
                  key={name}
                  className="overflow-hidden rounded-panel border border-ink-line bg-white"
                >
                  <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-brand/[0.08] to-surface-light">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-brand shadow-soft">
                      <Icon name="user" className="h-9 w-9" />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[1.05rem]">{name}</h3>
                    <p className="text-[0.78rem] uppercase tracking-[0.1em] text-ink-muted">
                      Managing Director
                    </p>
                    <p className="mt-3 text-[0.82rem] leading-relaxed text-ink-muted">
                      Photograph and profile to be supplied by the company.
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Notice title="Team details pending verification">
                {PENDING_ITEMS.team}
              </Notice>
            </div>

            <div className="mt-8 rounded-panel border border-ink-line bg-white p-6 sm:p-8">
              <h2 className="mb-2 text-[1.2rem]">
                Functions that run every project
              </h2>
              <p className="mb-5 text-[0.92rem] leading-[1.75] text-ink-muted">
                The capabilities below are the in-house functions described on
                the original website. Individual team names and designations can
                be added here once the company provides them.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    i: "build",
                    t: "Tool room",
                    d: "VMC, EDM, Wire Cut and CNC machines for in-house mold design and precision tool making.",
                  },
                  {
                    i: "layers",
                    t: "Design section",
                    d: "Dedicated 2D & 3D mold designing, CAD/CAM and engineering simulation.",
                  },
                  {
                    i: "gear",
                    t: "Production",
                    d: "61 automatic injection moulding machines from 60 to 600 tons, two-shift operations.",
                  },
                  {
                    i: "shield",
                    t: "Quality",
                    d: "Vision Measuring Machines, CMM, raw material testing and batch traceability.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-xl border border-ink-line p-4"
                  >
                    <span className="mb-2 grid h-9 w-9 place-items-center rounded-[9px] bg-brand/[0.08] text-brand">
                      <Icon name={x.i} className="h-[18px] w-[18px]" />
                    </span>
                    <strong className="block text-[0.95rem] text-navy">
                      {x.t}
                    </strong>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-muted">
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-panel border border-ink-line bg-surface-light p-6 sm:p-8">
              <h2 className="mb-3 text-[1.15rem]">Growth for every employee</h2>
              <p className="mb-4 text-[0.95rem] leading-[1.8] text-ink-muted">
                The company&apos;s stated mission includes the overall growth of
                every employee in consonance with the company&apos;s growth,
                along with continuous up-gradation of technology and quality
                management systems.
              </p>
              <CheckList
                items={[
                  "Overall growth of every employee in consonance with the company's growth",
                  "Continuous up-gradation of technology and QMS",
                  "Two-shift operations across both plants",
                ]}
              />
              <div className="mt-5">
                <Button to="/careers" variant="navy" icon="arrowRight">
                  Careers at Apex Ignite
                </Button>
              </div>
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      <CtaBand
        title="Want to join our manufacturing team?"
        text="Share your profile with us — details of current openings are published on the Careers page."
      />
    </>
  );
}
