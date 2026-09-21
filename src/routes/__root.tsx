import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, CalendarCheck, Menu, Phone, X } from "lucide-react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initReveal } from "../lib/reveal";

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
  const [bookingOpen, setBookingOpen] = useState(false);
  const [booking, setBooking] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const whatsappNumber = "92518151800";
  const openBooking = () => { setOpen(false); setBookingOpen(true); };
  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Hirra Hussain's clinic, I would like to book an appointment.
Name: ${booking.name}
Email: ${booking.email}
Phone: ${booking.phone}
Preferred service: ${booking.service || "Not specified"}
Message: ${booking.message || "No additional message"}`
  );

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
          <button type="button" className="nav-cta nav-book-button" onClick={openBooking}><CalendarCheck size={16} aria-hidden="true" /> Book Now</button>
        </nav>
      </div>
    </header>
    <div id="main-content">{children}</div>
    {bookingOpen && <div className="booking-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setBookingOpen(false); }}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button type="button" className="booking-close" aria-label="Close booking form" onClick={() => setBookingOpen(false)}><X size={20} /></button>
        <p className="kicker">APPOINTMENT REQUEST</p>
        <h2 id="booking-title">Tell us how we can help.</h2>
        <p className="booking-intro">Enter your details below. When you continue, WhatsApp will open with your appointment request ready to send.</p>
        <form onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer"); }}>
          <div className="form-grid">
            <label>Full name<input required value={booking.name} onChange={(e) => setBooking({...booking, name:e.target.value})} placeholder="Your name" /></label>
            <label>Email<input type="email" required value={booking.email} onChange={(e) => setBooking({...booking, email:e.target.value})} placeholder="you@example.com" /></label>
            <label>Phone number<input required value={booking.phone} onChange={(e) => setBooking({...booking, phone:e.target.value})} placeholder="03XX XXXXXXX" /></label>
            <label>Service<select value={booking.service} onChange={(e) => setBooking({...booking, service:e.target.value})}><option value="">Select a service</option><option>Anxiety Disorders Treatment</option><option>Bipolar Disorder Treatment</option><option>Depression Treatment</option><option>Mental Health Treatment</option><option>Psychiatric Consultation & Management</option><option>Online Video Consultation</option></select></label>
          </div>
          <label>Additional message<textarea rows={4} value={booking.message} onChange={(e) => setBooking({...booking, message:e.target.value})} placeholder="Tell us anything important about your appointment request..." /></label>
          <button type="submit" className="btn btn-whatsapp">Continue to WhatsApp <ArrowRight size={18} /></button>
          <p className="form-note">This form does not store or submit your information to a website server. It prepares a WhatsApp message using the details you enter.</p>
        </form>
      </section>
    </div>}
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
