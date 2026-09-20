import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [
    { title: "Contact Dr. Hirra Hussain | Rawalpindi" },
    { name: "description", content: "Contact Dr. Hirra Hussain for psychiatric appointment scheduling and clinic information in Rawalpindi." },
  ]}),
});

function Contact(){
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">CONTACT</p><h1>Reach the clinic with confidence.</h1><p>For appointments and availability, call 0518 151 800 or review the clinic and appointment details.</p></div></section>
    <section className="section"><div className="container contact-grid">
      <div className="contact-card"><Phone size={25}/><h2>Phone</h2><p>For appointment booking and scheduling.</p><a href="tel:0518151800" className="btn btn-primary">0518 151 800</a></div>
      <div className="contact-card"><MapPin size={25}/><h2>Clinic location</h2><p>Pakistan Institute of Mental Health (PIMH), adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt, Rawalpindi.</p><Link to="/clinic" className="text-link">View clinic details <ArrowRight size={16}/></Link></div>
      <div className="contact-card"><Clock3 size={25}/><h2>Clinic hours</h2><p>Monday, Tuesday & Thursday<br/>4:00 PM–6:00 PM</p></div>
      <div className="contact-card"><Clock3 size={25}/><h2>Online consultation</h2><p>Thursday<br/>4:30 PM–5:30 PM<br/><br/>Fee: Rs. 3,000</p></div>
    </div></section>
    <section className="section soft-section"><div className="container appointment-banner"><div><p className="kicker">BOOKING</p><h2>Ready to schedule?</h2><p>Review the available options and call the clinic to confirm your appointment.</p></div><Link to="/appointments" className="btn btn-light">View appointments <ArrowRight size={18}/></Link></div></section>
  </main>;
}
