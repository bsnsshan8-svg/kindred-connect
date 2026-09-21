import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [
    { title: "About Dr. Hirra Hussain | Psychiatrist" },
    { name: "description", content: "Learn about Dr. Hirra Hussain, MBBS, FCPS (Psychiatry), MRCPsych, and her psychiatric consultation practice." },
    { property: "og:title", content: "About Dr. Hirra Hussain | Psychiatrist" },
    { property: "og:description", content: "Learn about Dr. Hirra Hussain’s qualifications, experience and approach to psychiatric care." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

const img="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1764761304-762b6c08-6d27-4989-a7a8-f1b4fd6793bdremovalaipreview-1.webp?t=1764761306";

function About(){
  return <main>
    <section className="page-hero"><div className="container"><p className="kicker">ABOUT THE DOCTOR</p><h1>Clinical expertise, delivered with empathy.</h1><p>Meet Dr. Hirra Hussain and learn about her qualifications, experience and consultation approach.</p></div></section>
    <section className="section"><div className="container content-grid">
      <div><img className="portrait-image" src={img} alt="Dr. Hirra Hussain, psychiatrist" loading="lazy"/></div>
      <div className="section-heading"><p className="kicker">DR. HIRRA HUSSAIN</p><h2>A psychiatrist with a thoughtful, individualized approach.</h2><p>Dr. Hirra Hussain is a psychiatrist with 6 years of experience. Her qualifications include MBBS, FCPS (Psychiatry) and MRCPsych from the Royal College of Psychiatrists, UK.</p><p>Consultations are centered on careful assessment, clear communication and individualized treatment planning. The practice offers both in-person and online consultation options.</p>
        <div className="check-list"><span><CheckCircle2 size={18}/> Confidential consultations</span><span><CheckCircle2 size={18}/> Psychiatric assessment and management</span><span><CheckCircle2 size={18}/> In-person and online options</span></div>
        <Link to="/appointments" className="btn btn-primary">Book a Consultation <ArrowRight size={18}/></Link>
      </div>
    </div></section>
    <section className="section soft-section"><div className="container service-grid">
      <div className="service-card"><GraduationCap size={26}/><h3>Qualifications</h3><p>MBBS<br/>FCPS (Psychiatry)<br/>MRCPsych — Royal College of Psychiatrists, UK</p></div>
      <div className="service-card"><Award size={26}/><h3>Experience</h3><p>6 years of professional experience in psychiatry and mental health care.</p></div>
      <div className="service-card"><ShieldCheck size={26}/><h3>Professional status</h3><p>PMDC-verified psychiatrist with a focus on confidential, professional patient care.</p></div>
    </div></section>
  </main>;
}
