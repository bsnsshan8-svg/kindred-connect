import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/clinic")({
  component: Clinic,
  head: () => ({ meta: [
    { title: "Clinic | Dr. Hirra Hussain | Rawalpindi" },
    { name: "description", content: "Clinic location, hours and contact details for Dr. Hirra Hussain at Pakistan Institute of Mental Health in Rawalpindi." },
  ]}),
});

function Clinic() {
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">IN-PERSON CARE</p><h1>Pakistan Institute of Mental Health.</h1><p>Find the clinic, review the listed hours and call to confirm your appointment.</p></div></section>
    <section className="section"><div className="container clinic-layout">
      <div className="clinic-panel"><div className="clinic-map-placeholder"><MapPin size={34} aria-hidden="true" /><span>Pakistan Institute of Mental Health</span><small>Rawalpindi, Pakistan</small></div></div>
      <div className="section-heading"><p className="kicker">CLINIC DETAILS</p><h2>Conveniently located near Ayub Park.</h2><p>Pakistan Institute of Mental Health (PIMH), adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt, Rawalpindi.</p>
        <div className="detail-list">
          <div><Clock3 size={20} /><div><strong>Clinic hours</strong><span>Monday, Tuesday & Thursday<br/>4:00 PM–6:00 PM</span></div></div>
          <div><Phone size={20} /><div><strong>Appointments</strong><span>Call 0518 151 800 to confirm availability.</span></div></div>
        </div>
        <div className="hero-actions"><a href="tel:0518151800" className="btn btn-primary">Call the clinic <Phone size={17} /></a><Link to="/appointments" className="btn btn-secondary">Appointment details <ArrowRight size={17} /></Link></div>
      </div>
    </div></section>
    <section className="section soft-section"><div className="container appointment-banner"><div><p className="kicker">ONLINE OPTION</p><h2>Prefer to consult remotely?</h2><p>Online video consultation is listed for Thursday, 4:30 PM–5:30 PM, with a fee of Rs. 3,000.</p></div><Link to="/appointments" className="btn btn-light">View all options <ArrowRight size={18} /></Link></div></section>
  </main>;
}
