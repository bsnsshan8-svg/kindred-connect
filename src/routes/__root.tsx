import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { CalendarCheck, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="not-found"><h1>404</h1><h2>Page not found</h2><Link to="/" className="btn btn-primary">Return home</Link></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="not-found"><h2>This page didn't load</h2><p>Please refresh and try again.</p><button className="btn btn-primary" onClick={() => { router.invalidate(); reset(); }}>Try again</button></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [
    { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Dr. Hirra Hussain | Psychiatrist" },
    { name: "description", content: "Confidential psychiatric consultation with Dr. Hirra Hussain — MBBS, FCPS (Psychiatry), MRCPsych. In-person and online consultations." },
    { name: "author", content: "Dr. Hirra Hussain" },
    { property: "og:title", content: "Dr. Hirra Hussain | Psychiatrist" },
    { property: "og:description", content: "Compassionate, confidential psychiatric care with in-person and online consultation options." },
    { property: "og:type", content: "website" },
    { name: "theme-color", content: "#163f3b" },
  ], links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <html lang="en"><head><HeadContent /></head><body>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">H</span><span><strong>Dr. Hirra Hussain</strong><small>Psychiatry & Mental Wellness</small></span></Link>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/" activeProps={{className:"active"}} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" activeProps={{className:"active"}} onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" activeProps={{className:"active"}} onClick={() => setOpen(false)}>Services</Link>
          <Link to="/appointments" activeProps={{className:"active"}} onClick={() => setOpen(false)}>Appointments</Link>
          <Link to="/contact" activeProps={{className:"active"}} onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:0518151800" className="nav-phone"><Phone size={16}/> 0518 151 800</a>
          <Link to="/appointments" className="nav-cta" onClick={() => setOpen(false)}><CalendarCheck size={16}/> Book Now</Link>
        </nav>
      </div>
    </header>
    {children}
    <footer className="site-footer"><div className="container footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">H</span><span><strong>Dr. Hirra Hussain</strong><small>Psychiatry & Mental Wellness</small></span></div><p>Confidential psychiatric care centered on listening, understanding and individualized treatment planning.</p></div>
      <div><h4>Explore</h4><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/appointments">Appointments</Link><Link to="/contact">Contact</Link></div>
      <div><h4>Appointments</h4><p>Online: Thu · 4:30–5:30 PM</p><p>PIMH: Mon, Tue, Thu · 4–6 PM</p><a href="tel:0518151800">0518 151 800</a></div>
    </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Hirra Hussain. All rights reserved.</span><span>For emergencies, contact local emergency services.</span></div></footer>
    <Scripts />
  </body></html>;
}
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
