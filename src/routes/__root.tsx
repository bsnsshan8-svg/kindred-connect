import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const doctorImage = "https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1764761304-762b6c08-6d27-4989-a7a8-f1b4fd6793bdremovalaipreview-1.webp?t=1764761306";

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Hirra Hussain",
  "image": doctorImage,
  "description": "Psychiatrist providing in-person and online psychiatric consultations.",
  "telephone": "0518151800",
  "medicalSpecialty": "Psychiatry",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adjacent to Royal Palace Hotel, Opposite Ayub Park, Main GT Road Chaklala Cantt",
    "addressLocality": "Rawalpindi",
    "addressCountry": "PK"
  }
};

function NotFoundComponent() {
  return <div className="not-found"><p className="kicker">404</p><h1>That page is not available.</h1><p>The page you requested could not be found.</p><Link to="/" className="btn btn-primary">Return home</Link></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="not-found"><p className="kicker">SORRY</p><h1>This page didn't load.</h1><p>Please refresh and try again.</p><button className="btn btn-primary" onClick={() => { router.invalidate(); reset(); }}>Try again</button></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Hirra Hussain | Psychiatrist" },
      { name: "description", content: "Psychiatric consultation with Dr. Hirra Hussain, MBBS, FCPS (Psychiatry), MRCPsych. In-person care in Rawalpindi and online video consultation." },
      { name: "author", content: "Dr. Hirra Hussain" },
      { name: "theme-color", content: "#173936" },
      { property: "og:title", content: "Dr. Hirra Hussain | Psychiatrist" },
      { property: "og:description", content: "Confidential psychiatric consultation with in-person and online options." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <html lang="en"><head><HeadContent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} /></head><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Dr. Hirra Hussain home">
          <span className="brand-mark">H</span>
          <span><strong>Dr. Hirra Hussain</strong><small>Psychiatry & Mental Wellness</small></span>
        </Link>
        <button className="mobile-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <Link to="/" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Services</Link>
          <Link to="/appointments" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Appointments</Link>
          <Link to="/clinic" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Clinic</Link>
          <Link to="/faq" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/contact" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:0518151800" className="nav-phone"><Phone size={16} aria-hidden="true" /> 0518 151 800</a>
          <Link to="/appointments" className="nav-cta" onClick={() => setOpen(false)}><CalendarCheck size={16} aria-hidden="true" /> Book Now</Link>
        </nav>
      </div>
    </header>
    <div id="main-content">{children}</div>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">H</span><span><strong>Dr. Hirra Hussain</strong><small>Psychiatry & Mental Wellness</small></span></div><p>Confidential psychiatric care centered on listening, understanding and individualized treatment planning.</p></div>
        <div><h4>Explore</h4><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/appointments">Appointments</Link><Link to="/clinic">Clinic</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Appointments</h4><p>Online: Thursday · 4:30–5:30 PM</p><p>PIMH: Mon, Tue & Thu · 4:00–6:00 PM</p><a href="tel:0518151800">0518 151 800</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Hirra Hussain. All rights reserved.</span><span>For emergencies, contact local emergency services.</span></div>
    </footer>
    <Scripts />
  </body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
