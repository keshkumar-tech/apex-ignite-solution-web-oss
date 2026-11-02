import { Link } from "react-router-dom";
import useSeo from "../lib/useSeo";
import { ABOUT_LINKS, PRODUCTS } from "../data/site";
import Icon from "../components/ui/Icon";
import { Button, Container, PageBanner } from "../components/ui/Primitives";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description:
      "The page you requested could not be found. Browse our product categories and company information instead.",
    path: "/404",
    noindex: true,
  });

  return (
    <>
      <PageBanner
        eyebrow="404"
        title="Page not found"
        description="The page you were looking for does not exist or has moved. The links below will take you to the right place."
        crumbs={[{ label: "Page not found" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-[1.15rem]">Product categories</h2>
            <ul className="grid gap-1">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="flex items-center justify-between gap-2 border-b border-ink-line py-2.5 text-[0.92rem] text-ink transition-colors hover:text-brand"
                  >
                    {p.name}
                    <Icon
                      name="chevronRight"
                      className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-[1.15rem]">Company pages</h2>
            <ul className="grid gap-1">
              {ABOUT_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex items-center justify-between gap-2 border-b border-ink-line py-2.5 text-[0.92rem] text-ink transition-colors hover:text-brand"
                  >
                    {l.label}
                    <Icon
                      name="chevronRight"
                      className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/" variant="navy" iconLeft="arrowLeft">
            Back to home
          </Button>
          <Button to="/contact-us" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </>
  );
}
