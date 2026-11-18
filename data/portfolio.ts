import {
  AtSign,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Megaphone,
  MonitorPlay,
  PenTool,
  Search
} from "lucide-react";

export const profile = {
  name: "Pyae Zaw",
  title: "Digital Marketer · Content Writer · Web Developer",
  image: {
    src: "/assets/pyae-zaw-profile.png",
    alt: "Pyae Zaw profile photo"
  },
  tagline: "Digital marketing, clear writing, and useful creative work.",
  location: "Mandalay, Myanmar",
  email: "pyaezaw03a@gmail.com",
  phone: "09761976584",
  birthdate: "20 March 2003",
  availability: "Remote employee only",
  dailyAvailability: "12-14 hours daily",
  intro:
    "Social media planning, campaign copy, brand communication, and content strategy based on audience and market research.",
  about:
    "I am a digital marketer and technical writer from Mandalay. My work includes social media, market research, content, creative production, and website projects. I also hold Level 4 and Level 5 Computing Diplomas and have C1-level English teaching experience."
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Experience" },
  { href: "#credentials", label: "Credentials" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
] as const;

export const heroMetrics = [
  { value: "3+", label: "years experience", detail: "digital marketing and content" },
  { value: "3", label: "core pillars", detail: "digital marketing, AI, creative" }
] as const;

export const developerSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "PHP", "Laravel", "Python"] as const;

export const profileCards = [
  { label: "Location", value: "Mandalay, Myanmar", icon: MapPin },
  { label: "Work Preference", value: "Remote only", icon: BriefcaseBusiness },
  { label: "Availability", value: "12-14 hours daily", icon: MonitorPlay },
  { label: "Education", value: "Level 4 & 5 Computing Diplomas", icon: GraduationCap },
  { label: "Contact", value: "pyaezaw03a@gmail.com", icon: AtSign },
  { label: "Focus", value: "Content, marketing, AI, video", icon: BrainCircuit }
] as const;

export const services = [
  {
    title: "Digital Marketing",
    description: "Social media planning, campaign copy, brand communication, and AI-assisted content strategy.",
    icon: Megaphone
  },
  {
    title: "Market Analysis",
    description: "Audience insights, competitor research, trend analysis, and AI-powered data synthesis.",
    icon: Search
  },
  {
    title: "Creative Works",
    description: "Video scripts, visual concepts, tech reviews, AI content creation, and editing workflows.",
    icon: PenTool
  }
] as const;

export const experience = [
  
{
  role: "Founder & Tech Review Content Creator",
  company: "Circuit Media",
  period: "2024 - Present",
  label: "Founder",
  summary:
    "Founded and developed Circuit Media, an independent technology review platform focused on smartphone reviews, gadget insights, technology news, and informative content to help audiences make smarter technology decisions.",
  points: [
    "Founded and manage Circuit Media as an independent tech review media platform.",
    "Research and create smartphone reviews, gadget reviews, and technology-related content.",
    "Develop informative content covering technology trends, product features, comparisons, and industry updates.",
    "Manage content planning, editorial direction, and social media publishing.",
    "Create engaging technology content to build audience awareness, trust, and community engagement.",
    "Use research and product analysis to communicate technology information in a clear and accessible way."
  ],
  organizations: [
    {
      name: "Circuit Media",
      src: "/assets/circuitmedia-logo.png",
      alt: "Circuit Media logo"
    }
  ]
},{
    role: "Digital Marketing",
    company: "Selected brand partners",
    period: "2024 - 2026",
    label: "3+ years",
    summary: "Plan social campaigns and branded content with clear messaging, audience research, and consistent creative execution.",
    points: [
      "Write content, copy, and scripts for digital audiences.",
      "Use market and audience analysis to guide campaign decisions.",
      "Create graphics and edit videos for social channels.",
      "Plan publishing, community engagement, and platform-specific content."
    ],
    organizations: [
      { name: "SkillBridge AI", src: "/assets/skillbridge-ai.png", alt: "SkillBridge AI logo" },
      { name: "DigitalMarketing.mm", src: "/assets/digitalmarketing-mm.png", alt: "DigitalMarketing.mm logo" },
      { name: "ZENO Property", src: "/assets/zeno-logo-dark.png", alt: "ZENO Property logo" },
      { name: "Fluxion Technology", src: "/assets/fluxion-logo.png", alt: "Fluxion Technology logo" }
    ]
  },{
    role: "English Teacher",
    company: "Speakeasy Language Centre",
    period: "March 2025 - April 2026",
    label: "Advanced C1",
    summary:
      "Delivered clear English lessons and learning materials with a professional communication style, supported by Duolingo English Test Advanced CEFR C1 results.",
    points: [
      "Supported student learning, confidence, and communication skills.",
      "Prepared educational content and lesson materials.",
      "Maintained a reliable, friendly, and structured teaching approach."
    ],
    organizations: [
      { name: "Speakeasy Language Centre", src: "/assets/speakeasy-language-centre.png", alt: "Speakeasy Language Centre logo" }
    ]
  },
{
  role: "Content Writer",
  company: "DigitalMarketing.mm",
  period: "April 2025 - May 2026",
  label: "Content Writing & Digital Marketing",
  summary:
    "Created engaging digital marketing content for DigitalMarketing.mm, focusing on social media communication, promotional messaging, brand awareness, and audience engagement.",
  points: [
    "Wrote social media captions, promotional posts, and marketing content for digital audiences.",
    "Developed clear and engaging brand messages to communicate products, services, and marketing campaigns.",
    "Researched content topics, audience interests, and digital marketing trends.",
    "Supported content planning and social media publishing to maintain consistent brand communication.",
    "Created persuasive marketing copy designed to improve audience awareness, engagement, and brand visibility.",
    "Collaborated on creative content ideas and adapted writing styles to suit different marketing objectives."
  ],
  organizations: [
    {
      name: "DigitalMarketing.mm",
      src: "/assets/digitalmarketing-mm.png",
      alt: "DigitalMarketing.mm logo"
    }
  ]
},
{
  role: "AI Content Creator & AI Tools Specialist",
  company: "SkillBridge AI",
  period: "December 2025 - Present",
  label: "AI Tools & Creative Workflow",
  summary:
    "Developed AI-powered content and digital solutions using a range of advanced AI tools for content research, writing, image generation, video production, creative workflows, and AI-assisted software development.",
  points: [
    "AI Writing & Research: Used ChatGPT, Google Gemini, Claude, and Microsoft Copilot for research, content development, writing, and information analysis.",
    "AI Video Generation: Worked with Kling AI, Seedance, Veo 3, and Higgsfield AI to develop AI-generated videos, cinematic scenes, and creative video concepts.",
    "AI Image & Visual Creation: Used AI-powered creative workflows alongside Canva to develop visual concepts, graphics, and digital content.",
    "AI Coding & Development: Explored OpenAI Codex, Cursor, and Claude Code for AI-assisted programming, debugging, website development, and productivity.",
    "Video Editing & Production: Used CapCut for video editing, storytelling, post-production, and social media publishing.",
    "Creative Production: Combined multiple AI tools to develop content workflows for social media, digital campaigns, educational materials, and creative projects."
  ],
  organizations: [
    {
      name: "SkillBridge AI",
      src: "/assets/skillbridge-ai.png",
      alt: "SkillBridge AI logo"
    }
  ]
},
{
  role: "Corporate Content Writer",
  company: "Fluxion Technology",
  period: "September 2026 - November 2026",
  label: "Corporate Communications & Data Analysis",
  summary:
    "Developed professional digital communications and strategic content for Fluxion Technology and its subsidiary brand, ZENO Property. Delivered audience-focused website content, industry-related articles, corporate messaging, and digital marketing communications aligned with brand positioning and business objectives.",
  points: [
    "Corporate Website & Editorial Content: Developed professional website copy, industry articles, and blog publications to strengthen corporate communication and digital brand presence.",
    "International Digital Communications: Created structured, audience-focused content using professional business language and communication standards suitable for diverse digital audiences.",
    "Social Media & Brand Communications: Planned and developed corporate social media content, promotional campaigns, and brand messaging for Facebook and LinkedIn.",
    "Data Analysis & Performance Insights: Analyzed content performance, audience engagement, and digital marketing data to support informed communication and content strategies.",
    "Industry Research & Strategic Content: Conducted research into technology, real estate, industry developments, and audience insights to support relevant business communications.",
    "Multi-Brand Content Management: Maintained consistent brand identity, communication tone, and content direction across Fluxion Technology and ZENO Property.",
    "Business-Oriented Content Strategy: Aligned written communications with organizational objectives, target audiences, brand positioning, and digital marketing priorities."
  ],
  organizations: [
    {
      name: "Fluxion Technology",
      src: "/assets/fluxion-logo.png",
      alt: "Fluxion Technology logo",
      relationship: "Main Brand"
    },
    {
      name: "ZENO Property",
      src: "/assets/zeno-logo-dark.png",
      alt: "ZENO Property logo",
      relationship: "Sub-brand"
    }
  ]
}
] as const;

export const credentials = [
  {
    category: "NCC Education Computing Diploma",
    title: "Level 4 Diploma in Computing",
    detail: "Distinction · 70% · Awarded 17 January 2025",
    certificate: {
      src: "/assets/level-4-diploma.png",
      alt: "NCC Education Level 4 Diploma in Computing awarded to Pyae Zaw with Distinction"
    },
    pdf: {
      src: "/assets/level-4-diploma-transcript.pdf",
      label: "View diploma and transcript"
    }
  },
  {
    category: "NCC Education Computing Diploma",
    title: "Level 5 Diploma in Computing",
    detail: "Merit · 69% · Awarded 19 January 2026",
    certificate: {
      src: "/assets/level-5-diploma.png",
      alt: "NCC Education Level 5 Diploma in Computing awarded to Pyae Zaw with Merit"
    },
    pdf: {
      src: "/assets/level-5-diploma-transcript.pdf",
      label: "View diploma and transcript"
    }
  },
  {
    category: "English Proficiency",
    title: "Duolingo English Test",
    detail: "Advanced · CEFR C1",
    score: "138",
    certificate: {
      src: "/assets/duolingo-certificate.png",
      alt: "Duolingo English Test certificate showing an Advanced CEFR C1 score of 138"
    }
  }
] as const;

export const skillGroups = [
  {
    title: "Content & Marketing",
    items: [
      "Content Writing",
      "Social Media Content",
      "Copywriting",
      "Content Planning",
      "Digital Marketing",
      "Business Marketing",
      "Community Engagement",
      "Tech Review Content",
      "Video Scripting",
      "Video Production",
      "AI Graphic Design"
    ]
  },
  {
    title: "AI & Creative Tools",
    items: [
      "ChatGPT",
      "Google Gemini",
      "Kling",
      "Seedance Model",
      "Veo 3",
      "Canva",
      "CapCut",
      "AI-Assisted Writing",
      "AI Visual Content Creation",
      "Higgsfield",
      "Claude",
      "Copilot",
      "Codex",
      "Cursor",
      "Claude Code"
    ]
  },
  {
    title: "Technical & Computing",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Website Fundamentals",
      "Microsoft Office",
      "Google Workspace",
      "Next.js",
      "Laravel",
      "Python"
    ]
  },
  {
    title: "Strengths",
    items: [
      "Reliable",
      "Cooperative",
      "Accountable",
      "Quality-focused",
      "Remote-work discipline",
      "Fast learner",
      "Creative thinker",
      "Consistent communicator"
    ]
  }
] as const;

export const toolkitStrip = [
  "Digital Marketing",
  "Technical Writing",
  "Market Analysis",
  "Social Media",
  "Content Writing",
  "Video Editing",
  "Canva",
  "CapCut",
  "Google Workspace"
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" }
] as const;

export const contactMethods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, href: "#contact" }
] as const;
