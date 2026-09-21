import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react";
import anxietyImage from "../assets/anxiety-care.jpg.asset.json";
import bipolarImage from "../assets/bipolar-care.jpg.asset.json";
import depressionImage from "../assets/depression-care.jpg.asset.json";
import psychiatricConsultationImage from "../assets/psychiatric-consultation.jpg.asset.json";
import onlineConsultationImage from "../assets/online-consultation.jpg.asset.json";
import recoveryFamilySupportImage from "../assets/recovery-family-support.png.asset.json";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [
    { title: "Psychiatric Services | Dr. Hirra Hussain" },
    { name: "description", content: "Explore psychiatric consultation and treatment services available with Dr. Hirra Hussain in Rawalpindi and online." },
    { property: "og:title", content: "Psychiatric Services | Dr. Hirra Hussain" },
    { property: "og:description", content: "Explore psychiatric consultation and treatment services in Rawalpindi and online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

const items=[
  ["Anxiety Disorders Treatment","Assessment and management for persistent anxiety, excessive worry and related symptoms.",anxietyImage.url,"Person experiencing anxiety and emotional overwhelm"],
  ["Bipolar Disorder Treatment","Assessment and ongoing management tailored to the individual's symptoms, history and needs.",bipolarImage.url,"Person coping with intense emotional distress"],
  ["Depression Treatment","Psychiatric assessment and individualized treatment planning for depression.",depressionImage.url,"Person sitting alone while experiencing low mood"],
  ["Mental Health Treatment","A confidential consultation to understand symptoms and discuss appropriate care.",recoveryFamilySupportImage.url,"A person moving from emotional distress toward wellbeing and family connection"],
  ["Psychiatric Consultation & Management","Detailed evaluation, treatment planning and follow-up care.",psychiatricConsultationImage.url,"Line drawing representing different paths of thought"],
  ["Online Video Consultation","A private video appointment option for patients who prefer remote care.",onlineConsultationImage.url,"Person at a laptop preparing for an online consultation"],
] as const;

function Services(){
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">SERVICES</p><h1>Psychiatric care for the concerns that matter to you.</h1><p>Explore the consultation and treatment areas listed for Dr. Hirra Hussain.</p></div></section>
    <section className="section"><div className="container service-grid">{items.map(([title,text,image,alt],i)=><article className="service-card" key={title}><div className="service-image"><img src={image} alt={alt} loading="lazy"/><span className="service-number">0{i+1}</span><span className="service-icon"><Brain size={20} aria-hidden="true"/></span></div><div className="service-card-body"><h3>{title}</h3><p>{text}</p><span className="text-link">Consultation available <CheckCircle2 size={15}/></span></div></article>)}</div></section>
    <section className="section soft-section"><div className="container service-detail">
      <div><p className="kicker">THE NEXT STEP</p><h2>Start with a private conversation.</h2><p>Appointment details, timing and fees are available on the appointments page. Call the clinic to confirm availability.</p></div>
      <Link to="/appointments" className="btn btn-primary">View appointments <ArrowRight size={18}/></Link>
    </div></section>
  </main>;
}
