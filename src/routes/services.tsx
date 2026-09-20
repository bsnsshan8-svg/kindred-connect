import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [
    { title: "Psychiatric Services | Dr. Hirra Hussain" },
    { name: "description", content: "Explore psychiatric consultation and treatment services available with Dr. Hirra Hussain in Rawalpindi and online." },
  ]}),
});

const items=[
  ["Anxiety Disorders Treatment","Assessment and management for persistent anxiety, excessive worry and related symptoms."],
  ["Bipolar Disorder Treatment","Assessment and ongoing management tailored to the individual's symptoms, history and needs."],
  ["Depression Treatment","Psychiatric assessment and individualized treatment planning for depression."],
  ["Mental Health Treatment","A confidential consultation to understand symptoms and discuss appropriate care."],
  ["Psychiatric Consultation & Management","Detailed evaluation, treatment planning and follow-up care."],
  ["Online Video Consultation","A private video appointment option for patients who prefer remote care."],
];

function Services(){
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">SERVICES</p><h1>Psychiatric care for the concerns that matter to you.</h1><p>Explore the consultation and treatment areas listed for Dr. Hirra Hussain.</p></div></section>
    <section className="section"><div className="container service-grid">{items.map(([title,text],i)=><article className="service-card" key={title}><div className="service-number">0{i+1}</div><div className="service-icon"><Brain size={22}/></div><h3>{title}</h3><p>{text}</p><span className="text-link">Consultation available <CheckCircle2 size={15}/></span></article>)}</div></section>
    <section className="section soft-section"><div className="container service-detail">
      <div><p className="kicker">THE NEXT STEP</p><h2>Start with a private conversation.</h2><p>Appointment details, timing and fees are available on the appointments page. Call the clinic to confirm availability.</p></div>
      <Link to="/appointments" className="btn btn-primary">View appointments <ArrowRight size={18}/></Link>
    </div></section>
  </main>;
}
