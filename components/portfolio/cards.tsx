import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { credentials, experience, skillGroups } from "@/data/portfolio";
import { assetSrc, fadeIn } from "./shared";

export function MetricCard({ detail, label, value }: { detail: string; label: string; value: string }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{detail}</p>
    </div>
  );
}

export function InfoCard({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="info-card">
      <Icon size={22} />
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

export function ServiceCard({
  description,
  icon: Icon,
  title
}: {
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
}) {
  return (
    <motion.article {...fadeIn} className="service-card">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export function ExperienceItem({ index, item }: { index: number; item: (typeof experience)[number] }) {
  const organizations = "organizations" in item ? item.organizations : undefined;

  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="experience-item">
      <div className="experience-meta">
        <span>{item.period}</span>
        <strong>{item.label}</strong>
      </div>
      <div className="experience-copy">
        <p>{item.company}</p>
        <h3>{item.role}</h3>
        {organizations ? (
          <div
            className={`experience-logo-row${organizations.length > 2 ? " experience-logo-row-many" : ""}`}
            aria-label="Associated brands"
          >
            {organizations.map((organization) => (
              <div className="experience-organization" key={organization.name}>
                <div className="experience-logo-tile" title={organization.name}>
                  <Image
                    src={assetSrc(organization.src)}
                    alt={organization.alt}
                    width={160}
                    height={160}
                  />
                </div>
                <span>{organization.name}</span>
                {"relationship" in organization ? <small>{organization.relationship}</small> : null}
              </div>
            ))}
          </div>
        ) : null}
        <span>{item.summary}</span>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <Check size={17} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function CredentialCard({ index, credential }: { index: number; credential: (typeof credentials)[number] }) {
  const certificate = credential.certificate;
  const score = "score" in credential ? credential.score : undefined;
  const pdf = "pdf" in credential ? credential.pdf : undefined;

  return (
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.04 }}
      className="credential-card"
    >
      <div className="credential-card-copy">
        <p>{credential.category}</p>
        <h3>{credential.title}</h3>
        <span>{credential.detail}</span>
      </div>
      {score ? (
        <div className="credential-score">
          <strong>{score}</strong>
          <span>Test score</span>
        </div>
      ) : null}
      <div className="credential-certificate-frame">
        <Image
          src={assetSrc(certificate.src)}
          alt={certificate.alt}
          width={961}
          height={1280}
        />
      </div>
      {pdf ? (
        <a className="credential-document-link" href={assetSrc(pdf.src)} target="_blank" rel="noopener noreferrer">
          {pdf.label}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      ) : null}
    </motion.article>
  );
}

export function SkillPanel({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="skill-panel">
      <div>
        <h3>{group.title}</h3>
        <span>{String(group.items.length).padStart(2, "0")}</span>
      </div>
      <p>
        {group.items.map((item) => (
          <small key={item}>{item}</small>
        ))}
      </p>
    </motion.article>
  );
}
