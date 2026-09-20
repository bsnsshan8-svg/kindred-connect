import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Brain, CheckCircle2, Clock3, GraduationCap, HeartHandshake, ShieldCheck, Star, Video } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const doctorImage =
  "https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1764761304-762b6c08-6d27-4989-a7a8-f1b4fd6793bdremovalaipreview-1.webp?t=1764761306";

const services = [
  { title: "Anxiety & Worry", text: "Assessment and personalized management for persistent anxiety, excessive worry and related symptoms." },
  { title: "Depression", text: "Compassionate psychiatric assessment and evidence-informed treatment planning for depression." },
  { title: "Bipolar Disorder", text: "Ongoing assessment and management designed around your symptoms, history and goals." },
  { title: "Mental Wellness", text: "A confidential space to understand what you are experiencing and decide on practical next steps." },
  { title: "Psychiatric Consultation", text: "Detailed evaluation, diagnosis, treatment planning and follow-up care." },
  { title: "Online Consultation", text: "Private video consultations from the comfort of your home, where clinically appropriate." },
];

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><ShieldCheck size={16} /> PMDC Verified Psychiatrist</div>
            <h1>Thoughtful psychiatric care for a <span>healthier mind.</span></h1>
            <p className="hero-lead">
              Dr. Hirra Hussain provides confidential, compassionate psychiatric consultations with a focus on understanding the whole person.
            </p>
            <div className="hero-actions">
              <Link to="/appointments" className="btn btn-primary">Book an Appointment <ArrowRight size={18} /></Link>
              <Link to="/about" className="btn btn-secondary">Meet Dr. Hirra</Link>
            </div>
            <div className="trust-row">
              <div><strong>6+</strong><span>Years of experience</span></div>
              <div><strong>4.5/5</strong><span>Patient rating</span></div>
              <div><strong>32</strong><span>Verified reviews</span></div>
            </div>
          </div>

          <div className="doctor-hero-card">
            <div className="doctor-photo-wrap">
              <img src={doctorImage} alt="Dr. Hirra Hussain, Psychiatrist" />
              <div className="verified-badge"><CheckCircle2 size={16} /> PMDC Verified</div>
            </div>
            <div className="doctor-card-content">
              <p className="small-label">PSYCHIATRIST</p>
              <h2>Dr. Hirra Hussain</h2>
              <p>MBBS · FCPS (Psychiatry) · MRCPsych</p>
              <div className="availability"><span className="status-dot" /> Online consultations available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div><Award size={24}/><div><strong>6+ Years</strong><span>Clinical experience</span></div></div>
          <div><Star size={24}/><div><strong>4.5 / 5</strong><span>Patient rating</span></div></div>
          <div><HeartHandshake size={24}/><div><strong>90%</strong><span>Patient satisfaction</span></div></div>
          <div><Video size={24}/><div><strong>Video Consult</strong><span>Available online</span></div></div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading centered">
            <p className="kicker">AREAS OF CARE</p>
            <h2>Support that starts with listening.</h2>
            <p>Every consultation begins with understanding your concerns, history and goals before discussing appropriate treatment options.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon"><Brain size={22} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to="/services" className="text-link">Learn more <ArrowRight size={16}/></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container about-preview">
          <div className="about-visual">
            <div className="about-card"><GraduationCap size={28}/><strong>MBBS · FCPS</strong><span>Psychiatry</span></div>
            <div className="about-card offset"><Award size={28}/><strong>MRCPsych</strong><span>Royal College of Psychiatrists, UK</span></div>
          </div>
          <div className="section-heading">
            <p className="kicker">MEET YOUR PSYCHIATRIST</p>
            <h2>Professional care, delivered with empathy.</h2>
            <p>Dr. Hirra Hussain is a psychiatrist with over 6 years of experience. Her approach combines careful assessment, clear communication and individualized treatment planning.</p>
            <div className="check-list">
              <span><CheckCircle2 size={18}/> Confidential consultations</span>
              <span><CheckCircle2 size={18}/> Evidence-informed treatment planning</span>
              <span><CheckCircle2 size={18}/> In-person and online options</span>
            </div>
            <Link to="/about" className="btn btn-secondary">About Dr. Hirra <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container appointment-banner">
          <div>
            <p className="kicker">BOOK YOUR CONSULTATION</p>
            <h2>Ready to take the next step?</h2>
            <p>Choose an appointment option that works for you. Online video consultation is available every Thursday from 4:30 PM–5:30 PM.</p>
          </div>
          <div className="appointment-actions">
            <Link to="/appointments" className="btn btn-light">Book Appointment <ArrowRight size={18}/></Link>
            <a href="tel:0518151800" className="btn btn-outline-light">Call 0518 151 800</a>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-heading centered">
            <p className="kicker">PATIENT FEEDBACK</p>
            <h2>What patients say</h2>
          </div>
          <div className="review-grid">
            <blockquote><div className="stars">★★★★★</div><p>“Very kind, understanding and professional. Full of empathy and knowledge.”</p><cite>Verified patient · Yasmeen</cite></blockquote>
            <blockquote><div className="stars">★★★★★</div><p>“She is very nice and kind doctor. Very helpful, and she listens to her patients without being in a hurry.”</p><cite>Verified patient · Muhammad</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading"><p className="kicker">QUICK ANSWERS</p><h2>Before your appointment</h2><p>Simple information to help you choose the right consultation option.</p></div>
          <div className="faq-list">
            <details open><summary>What is the consultation fee?</summary><p>Online video consultation: Rs. 3,000. Pakistan Institute of Mental Health (PIMH): Rs. 2,500.</p></details>
            <details><summary>When is online consultation available?</summary><p>Online video consultation is listed for Thursday, 4:30 PM–5:30 PM.</p></details>
            <details><summary>Where is the in-person clinic?</summary><p>Pakistan Institute of Mental Health (PIMH), adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt, Rawalpindi.</p></details>
          </div>
        </div>
      </section>
    </main>
  );
}
