import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Brain, CheckCircle2, Clock3, GraduationCap, HeartHandshake, MapPin, ShieldCheck, Star, Video } from "lucide-react";
import doctorVideo from "../assets/psychiatrist-hira.mp4.asset.json";
import doctorVideoPoster from "../assets/psychiatrist-hira-poster.jpg.asset.json";
import anxietyImage from "../assets/anxiety-care.jpg.asset.json";
import bipolarImage from "../assets/bipolar-care.jpg.asset.json";
import depressionImage from "../assets/depression-care.jpg.asset.json";
import mentalHealthImage from "../assets/mental-health-care.jpg.asset.json";
import psychiatricConsultationImage from "../assets/psychiatric-consultation.jpg.asset.json";
import onlineConsultationImage from "../assets/online-consultation.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Dr. Hirra Hussain | Psychiatrist in Rawalpindi" },
      { name: "description", content: "Psychiatric consultation with Dr. Hirra Hussain, MBBS, FCPS (Psychiatry), MRCPsych. In-person care in Rawalpindi and online video consultation." },
      { property: "og:title", content: "Dr. Hirra Hussain | Psychiatrist in Rawalpindi" },
      { property: "og:description", content: "Confidential psychiatric consultation with in-person and online options." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  ["Anxiety Disorders Treatment", "Assessment and management for persistent anxiety, excessive worry and related symptoms.", anxietyImage.url, "Person experiencing anxiety and emotional overwhelm"],
  ["Depression Treatment", "Psychiatric assessment and individualized treatment planning for depression.", depressionImage.url, "Person sitting alone while experiencing low mood"],
  ["Bipolar Disorder Treatment", "Assessment and ongoing management shaped around symptoms, history and individual needs.", bipolarImage.url, "Person coping with intense emotional distress"],
  ["Mental Health Treatment", "A confidential consultation to understand concerns and discuss appropriate care.", mentalHealthImage.url, "Brain model representing mental health and new understanding"],
  ["Psychiatric Consultation & Management", "Detailed psychiatric evaluation, treatment planning and follow-up care.", psychiatricConsultationImage.url, "Line drawing representing different paths of thought"],
  ["Online Video Consultation", "A private video consultation option for patients who prefer remote care.", onlineConsultationImage.url, "Person at a laptop preparing for an online consultation"],
] as const;

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><ShieldCheck size={16} aria-hidden="true" /> PMDC Verified Psychiatrist</p>
            <h1>Psychiatric care that begins with <span>being heard.</span></h1>
            <p className="hero-lead">Dr. Hirra Hussain provides confidential psychiatric consultations for people seeking thoughtful assessment, clear guidance and individualized care.</p>
            <div className="hero-actions">
              <Link to="/appointments" className="btn btn-primary">Book an Appointment <ArrowRight size={18} /></Link>
              <a href="tel:0518151800" className="btn btn-secondary">Call 0518 151 800</a>
            </div>
            <div className="trust-row" aria-label="Practice highlights">
              <div><strong>6 Years</strong><span>Experience</span></div>
              <div><strong>4.5 / 5</strong><span>Patient rating</span></div>
              <div><strong>32</strong><span>Reviews</span></div>
            </div>
          </div>

          <div className="doctor-hero-card">
            <div className="doctor-photo-wrap">
              <video controls playsInline preload="metadata" poster={doctorVideoPoster.url} aria-label="Video featuring Dr. Hirra Hussain">
                <source src={doctorVideo.url} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="verified-badge"><CheckCircle2 size={16} aria-hidden="true" /> PMDC Verified</div>
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
          <div><Award size={23} aria-hidden="true" /><div><strong>6 Years</strong><span>Clinical experience</span></div></div>
          <div><Star size={23} aria-hidden="true" /><div><strong>4.5 / 5</strong><span>Patient rating</span></div></div>
          <div><HeartHandshake size={23} aria-hidden="true" /><div><strong>90%</strong><span>Satisfied patients</span></div></div>
          <div><Video size={23} aria-hidden="true" /><div><strong>Video consult</strong><span>Online option</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="kicker">AREAS OF CARE</p>
            <h2>Support built around your concerns.</h2>
            <p>Explore the psychiatric services available with Dr. Hirra Hussain. Each consultation starts with understanding what you are experiencing.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, text, image, alt], index) => (
              <article className="service-card" key={title}>
                <div className="service-image"><img src={image} alt={alt} loading="lazy" /><span className="service-number">0{index + 1}</span><span className="service-icon"><Brain size={20} aria-hidden="true" /></span></div>
                <div className="service-card-body"><h3>{title}</h3><p>{text}</p><Link to="/services" className="text-link">Explore services <ArrowRight size={16} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container about-preview">
          <div className="about-visual">
            <div className="about-orbit" aria-hidden="true" />
            <div className="about-card"><GraduationCap size={28} aria-hidden="true" /><strong>MBBS · FCPS</strong><span>Psychiatry</span></div>
            <div className="about-card offset"><Award size={28} aria-hidden="true" /><strong>MRCPsych</strong><span>Royal College of Psychiatrists, UK</span></div>
          </div>
          <div className="section-heading">
            <p className="kicker">MEET DR. HIRRA HUSSAIN</p>
            <h2>Professional expertise with a human approach.</h2>
            <p>Dr. Hirra Hussain is a psychiatrist with 6 years of experience. She holds MBBS, FCPS (Psychiatry) and MRCPsych qualifications from the Royal College of Psychiatrists, UK.</p>
            <div className="check-list">
              <span><CheckCircle2 size={18} /> Confidential and respectful consultations</span>
              <span><CheckCircle2 size={18} /> Individualized assessment and treatment planning</span>
              <span><CheckCircle2 size={18} /> In-person and online consultation options</span>
            </div>
            <Link to="/about" className="btn btn-secondary">Meet the Doctor <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-highlight">
          <div>
            <p className="kicker">WHAT TO EXPECT</p>
            <h2>A clear, private path to your consultation.</h2>
            <p>Choose the appointment format that suits you, confirm availability by phone, and come prepared to discuss the concerns that brought you here.</p>
          </div>
          <div className="process-list">
            <div><span>01</span><div><strong>Choose a format</strong><p>Online video consultation or an in-person visit at PIMH.</p></div></div>
            <div><span>02</span><div><strong>Confirm your appointment</strong><p>Call 0518 151 800 to confirm timing and availability.</p></div></div>
            <div><span>03</span><div><strong>Have your consultation</strong><p>Discuss your concerns privately with Dr. Hirra Hussain.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-heading centered">
            <p className="kicker">PATIENT FEEDBACK</p>
            <h2>Words from patients.</h2>
          </div>
          <div className="review-grid">
            <blockquote><div className="stars" aria-label="5 stars">★★★★★</div><p>“Very kind, understanding and professional. Full of empathy and knowledge.”</p><cite>Patient review</cite></blockquote>
            <blockquote><div className="stars" aria-label="5 stars">★★★★★</div><p>“She is very nice and kind doctor. Very helpful, and she listens to her patients she is not in hurry at all.”</p><cite>Patient review</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-strip">
          <div className="location-icon"><MapPin size={25} aria-hidden="true" /></div>
          <div><p className="kicker">IN-PERSON CARE</p><h2>Pakistan Institute of Mental Health</h2><p>Adjacent to Royal Palace Hotel, opposite Ayub Park, Main GT Road, Chaklala Cantt, Rawalpindi.</p></div>
          <Link to="/clinic" className="btn btn-secondary">Clinic details <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading"><p className="kicker">FAQ</p><h2>Before you book.</h2><p>Quick answers about consultation options, timing and fees.</p><Link to="/faq" className="text-link">View all FAQs <ArrowRight size={16} /></Link></div>
          <div className="faq-list">
            <details open><summary>What is the consultation fee?</summary><p>Online video consultation: Rs. 3,000. PIMH consultation: Rs. 2,500.</p></details>
            <details><summary>When is online consultation available?</summary><p>Thursday, 4:30 PM–5:30 PM.</p></details>
            <details><summary>Where is the in-person clinic?</summary><p>Pakistan Institute of Mental Health, Chaklala Cantt, Rawalpindi. See the clinic page for the full address and schedule.</p></details>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container appointment-banner">
          <div>
            <p className="kicker">TAKE THE NEXT STEP</p>
            <h2>Choose the consultation that fits you.</h2>
            <p>Review the available appointment options and call to confirm availability.</p>
          </div>
          <div className="appointment-actions">
            <Link to="/appointments" className="btn btn-light">View appointments <ArrowRight size={18} /></Link>
            <a href="tel:0518151800" className="btn btn-outline-light">Call 0518 151 800</a>
          </div>
        </div>
      </section>
    </main>
  );
}
