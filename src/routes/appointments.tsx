import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Phone, Video } from "lucide-react";

export const Route = createFileRoute("/appointments")({
  component: Appointments,
  head: () => ({ meta: [
    { title: "Appointments | Dr. Hirra Hussain" },
    { name: "description", content: "View online and in-person appointment options, consultation fees, timings and booking information for Dr. Hirra Hussain." },
  ]}),
});

function Appointments(){
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">APPOINTMENTS</p><h1>Choose how you would like to consult.</h1><p>Online video consultation and in-person appointments are listed below. Call to confirm availability.</p></div></section>
    <section className="section"><div className="container booking-grid">
      <article className="info-card booking-card"><div className="card-eyebrow"><Video size={18}/> ONLINE</div><h2>Video Consultation</h2><p>Private video consultation from your phone or laptop.</p><table className="schedule-table"><tbody><tr><td>Day</td><td>Thursday</td></tr><tr><td>Time</td><td>4:30 PM–5:30 PM</td></tr><tr><td>Fee</td><td>Rs. 3,000</td></tr></tbody></table><a href="tel:0518151800" className="btn btn-primary">Call to book <Phone size={17}/></a></article>
      <article className="info-card booking-card"><div className="card-eyebrow"><MapPin size={18}/> IN PERSON</div><h2>PIMH · Rawalpindi</h2><p>Pakistan Institute of Mental Health, adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt.</p><table className="schedule-table"><tbody><tr><td>Days</td><td>Mon, Tue & Thu</td></tr><tr><td>Time</td><td>4:00 PM–6:00 PM</td></tr><tr><td>Fee</td><td>Rs. 2,500</td></tr></tbody></table><a href="tel:0518151800" className="btn btn-primary">Call to book <Phone size={17}/></a></article>
    </div><div className="container" style={{marginTop:22}}><div className="notice"><CalendarDays size={17} aria-hidden="true"/><span>Timings and fees reflect the supplied practice information. Please confirm current availability when booking.</span></div></div></section>
    <section className="section soft-section"><div className="container service-detail"><div><p className="kicker">NEED MORE INFORMATION?</p><h2>Visit the clinic page or check the FAQs.</h2><p>Review the location details, common questions and contact information before your appointment.</p></div><div className="hero-actions"><Link to="/clinic" className="btn btn-secondary">Clinic details <ArrowRight size={17}/></Link><Link to="/faq" className="btn btn-primary">View FAQs <ArrowRight size={17}/></Link></div></div></section>
  </main>;
}
