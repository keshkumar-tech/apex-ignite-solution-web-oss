import { lazy, Suspense, useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";

/* Home stays in the main chunk — it is the landing route and splitting it
   would add a second round-trip before the hero can paint. Every other route
   is fetched on demand, which keeps the initial bundle to the shell only. */
import Home from "./pages/Home";

const AboutOverview = lazy(() => import("./pages/about/AboutOverview"));
const DirectorMessage = lazy(() => import("./pages/about/DirectorMessage"));
const MissionVision = lazy(() => import("./pages/about/MissionVision"));
const OurTeam = lazy(() => import("./pages/about/OurTeam"));
const Awards = lazy(() => import("./pages/about/Awards"));
const Quality = lazy(() => import("./pages/about/Quality"));
const Infrastructure = lazy(() => import("./pages/about/Infrastructure"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Customers = lazy(() => import("./pages/Customers"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Slim placeholder while a route chunk downloads — no layout jump. */
function RouteFallback() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center" role="status">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink-line border-t-accent" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

/** Scroll to top on route change (keeping in-page anchors working). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname, hash]);
  return null;
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-[999] rounded-b-lg bg-accent px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about-us" element={<AboutOverview />} />
          <Route path="director-message" element={<DirectorMessage />} />
          <Route path="mission-vision" element={<MissionVision />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="awards-achievements" element={<Awards />} />
          <Route path="quality-certifications" element={<Quality />} />
          <Route path="our-infrastructure" element={<Infrastructure />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />

          <Route path="our-customers" element={<Customers />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-of-service" element={<Terms />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
