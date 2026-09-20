import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({ meta: [
    { title: "FAQs | Dr. Hirra Hussain" },
    { name: "description", content: "Frequently asked questions about psychiatric consultations, fees, timings and clinic location for Dr. Hirra Hussain." },
  ]}),
});

const faqs = [
  ["What services does Dr. Hirra Hussain provide?", "Services include anxiety disorders treatment, bipolar disorder treatment, depression treatment, mental health treatment, psychiatric consultation and management, and online video consultation."],
  ["What is the online consultation fee?", "The supplied practice information lists the online video consultation fee as Rs. 3,000."],
  ["What is the PIMH consultation fee?", "The supplied practice information lists the PIMH consultation fee as Rs. 2,500."],
  ["When is online consultation available?", "Online video consultation is listed for Thursday from 4:30 PM to 5:30 PM."],
  ["When is the PIMH clinic available?", "The supplied schedule lists Monday, Tuesday and Thursday from 4:00 PM to 6:00 PM."],
  ["Where is the PIMH clinic located?", "Pakistan Institute of Mental Health (PIMH), adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt, Rawalpindi."],
  ["How do I book an appointment?", "Call 0518 151 800 to confirm availability and arrange an appointment."],
  ["Can I book an online consultation?", "Yes. An online video consultation option is listed for Thursday, 4:30 PM–5:30 PM. Please call to confirm availability."],
  ["Are the timings and fees fixed?", "The website reflects the supplied practice information. Please confirm current availability and fees when booking."],
];

function FAQ() {
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">FREQUENTLY ASKED QUESTIONS</p><h1>Clear answers before you book.</h1><p>Practical information about services, appointment options, fees and the clinic.</p></div></section>
    <section className="section"><div className="container faq-page-grid">
      <aside className="faq-aside"><p className="kicker">NEED HELP?</p><h2>Still have a question?</h2><p>Call the clinic to confirm availability or ask about the right consultation option.</p><a href="tel:0518151800" className="btn btn-primary">Call 0518 151 800</a></aside>
      <div className="faq-list faq-page-list">{faqs.map(([q,a], i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div></section>
    <section className="section soft-section"><div className="container appointment-banner"><div><p className="kicker">READY WHEN YOU ARE</p><h2>Review the appointment options.</h2><p>Choose between online video consultation and the PIMH clinic.</p></div><Link to="/appointments" className="btn btn-light">View appointments <ArrowRight size={18}/></Link></div></section>
  </main>;
}
