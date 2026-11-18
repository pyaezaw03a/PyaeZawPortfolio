import type { FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  contactMethods,
  credentials,
  developerSkills,
  experience,
  heroMetrics,
  profile,
  profileCards,
  services,
  skillGroups,
  toolkitStrip
} from "@/data/portfolio";
import { ContactForm, ProfileRow } from "./contact-form";
import { CredentialCard, ExperienceItem, InfoCard, MetricCard, ServiceCard, SkillPanel } from "./cards";
import { SectionIntro } from "./section-intro";
import { assetSrc, fadeIn, type ContactFormState } from "./shared";

type ContactSectionProps = {
  errors: Partial<ContactFormState>;
  form: ContactFormState;
  onChange: (field: keyof ContactFormState, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  sent: boolean;
};

export function HeroSection() {
  return (
    <section id="home" className="split-hero">
      <div className="split-hero-inner">
        <motion.div {...fadeIn} className="identity-panel identity-panel-left">
          <p className="identity-eyebrow">Marketing &amp; content</p>
          <h1>Digital Marketer</h1>
          <p>
            I plan social content, write campaign copy, and help brands communicate clearly with their audiences.
          </p>
          <a href="#projects" className="identity-link">
            view my work
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="portrait-stage">
          <div className="paint-stack" aria-hidden="true">
            <span className="paint-mark paint-mark-blue" />
            <span className="paint-mark paint-mark-gold" />
            <span className="paint-mark paint-mark-red" />
          </div>
          <Image
            src={assetSrc(profile.image.src)}
            alt={profile.image.alt}
            width={900}
            height={1200}
            priority
            className="hero-person-photo"
          />
          <div className="portrait-caption">
            <span>available remote</span>
            <strong>{profile.name}</strong>
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.16 }} className="identity-panel identity-panel-right">
          <p className="identity-eyebrow">Web &amp; technology</p>
          <h1>Web Developer</h1>
          <p>
            I build responsive websites and practical digital tools with HTML, CSS, JavaScript, and modern web frameworks.
          </p>
          <div className="builder-stack" aria-label="Developer skills">
            {developerSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="identity-actions">
            <a href="https://circuitmedia.site.je/" target="_blank" rel="noopener noreferrer" className="identity-link">
              view Circuit Media website
              <ExternalLink size={17} />
            </a>
            <a href="#contact" className="identity-link">
              contact me
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>

      <p className="hero-metrics-kicker">Impact-Focused</p>
      <div className="hero-metrics-bar">
        {heroMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  );
}

export function ToolkitStrip() {
  return (
    <section className="toolkit-strip" aria-label="Creative toolkit">
      <div className="toolkit-track">
        {toolkitStrip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        kicker="About"
        title="A little about my work."
        text="I work across digital marketing, technical writing, social media, and web projects, with a practical focus on clear communication."
      />

      <div className="about-grid">
        <motion.div {...fadeIn} className="statement-panel">
          <p>{profile.about}</p>
          <p>
            I work well with a team, take responsibility for details, and am available for up to {profile.dailyAvailability}
            each day for remote projects.
          </p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="profile-card-grid">
          {profileCards.map((card) => (
            <InfoCard key={card.label} label={card.label} value={card.value} icon={card.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="black-section">
      <div className="section-shell">
        <SectionIntro kicker="Services" title="How I can help." text={profile.intro} inverted />

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section id="projects" className="section-shell showcase-section">
      <SectionIntro
        kicker="Experience"
        title="Roles &amp; selected brands"
        text="A concise view of my responsibilities and the organizations represented in my work."
      />

      <div id="experience" className="experience-list experience-anchor">
        {experience.map((item, index) => (
          <ExperienceItem key={`${item.role}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export function CredentialsSection() {
  return (
    <section id="credentials" className="credentials-section">
      <div className="section-shell">
        <SectionIntro
          kicker="Education &amp; certifications"
          title="Credentials that support my work."
          text="Computing diplomas and my English proficiency certification, gathered in one place."
        />

        <div className="credentials-grid">
          {credentials.map((credential, index) => (
            <CredentialCard key={credential.title} credential={credential} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="black-section">
      <div className="section-shell">
        <SectionIntro
          kicker="Skills"
          title="Skills and tools."
          text="The tools I use to plan, write, analyze, create, and build across marketing and web projects."
          inverted
        />

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ errors, form, onChange, onSubmit, sent }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell contact-section">
      <SectionIntro
        kicker="Contact"
        title="Get in touch."
        text="Reach out about digital marketing, writing, or web projects. You can use the form or contact me directly."
      />

      <div className="contact-grid">
        <motion.div {...fadeIn} className="contact-rail">
          {contactMethods.map((method) => (
            <a key={method.label} className="contact-method" href={method.href}>
              <span>
                <small>{method.label}</small>
                <strong>{method.value}</strong>
              </span>
              <ExternalLink size={18} />
            </a>
          ))}

          <div className="profile-summary">
            <p>Profile</p>
            <ProfileRow label="Name" value={profile.name} />
            <ProfileRow label="Birthdate" value={profile.birthdate} />
            <ProfileRow label="Availability" value={profile.availability} />
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
          <ContactForm errors={errors} form={form} onChange={onChange} onSubmit={onSubmit} sent={sent} />
        </motion.div>
      </div>
    </section>
  );
}
