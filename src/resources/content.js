const person = {
  firstName: "Michael",
  lastName: "Baylard",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "baylardmichael@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  linkedin: "https://www.linkedin.com/in/michael-baylard/",
  github: "https://github.com/michaelbaylard",
  logo: "/images/projects/logo.png",
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: person.linkedin,
  },
  {
    name: "GitHub",
    icon: "github",
    link: person.github,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/resume_ai_engineer.pdf",
    target: "_blank",
  },
];

/** Layout + nav (Lise Karimi–style shell — https://www.lisekarimi.com/) */
const site = {
  header: {
    /** Lise-style: in-page sections on home + projects index */
    nav: [
      { label: "ABOUT", href: "/#about-me" },
      { label: "SERVICES", href: "/#services" },
      { label: "PROJECTS", href: "/work" },
    ],
    ctaLabel: "Download CV",
  },
  footer: {
    tagline: "Shipping production AI that actually works.",
    connectTitle: "Connect With Me",
  },
};

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: "Michael Baylard — AI Engineer",
  description:
    "AI Engineer shipping production LLM systems, multi-agent pipelines, and computer vision at scale. Founder of Speaksense and Klarix.",
  subline: (
    <>
      AI Engineer shipping production LLM systems, multi-agent pipelines, and computer vision at scale. Built two AI
      products from zero — a multi-tenant RAG co-agent with streaming inference and a config-driven agentic pipeline
      orchestrating 6 LLM providers. Deployed real-time classification across 38M+ sensor images on GPU clusters (F1 =
      0.92) at John Deere. $82M+ measurable business impact.
    </>
  ),
  /** Lise Karimi–style hero (https://www.lisekarimi.com/) */
  roleLinePrimary: "AI Engineer & Founder",
  roleLineSecondary: "Speaksense · Klarix",
  heroTagline: (
    <>
      Turning LLMs and computer vision into production-ready AI systems with measurable business impact.
    </>
  ),
  aboutMeTitle: "About Me",
  aboutSnippet: (
    <>
      I help teams move from AI prototypes to products that stay up in production — clear architecture, solid data
      models, and delivery that includes auth, billing, and observability. My work spans multi-tenant LLM platforms,
      agentic pipelines, and large-scale computer vision.
    </>
  ),
  stats: [
    { value: "3+", label: "Years shipping production AI" },
    { value: "2", label: "Products built 0→1" },
    { value: "38M+", label: "Sensor images in production CV" },
    { value: "$82M+", label: "Revenue influenced (analytics)" },
  ],
  terminal: [
    {
      input: "whoami",
      output: "Michael Baylard — AI Engineer / Founder @ Speaksense, Klarix",
    },
    {
      input: "mission",
      output: "Ship production LLM and CV systems with measurable business impact.",
    },
    {
      input: "stack",
      output: "Next.js, Neon/pgvector, PyTorch, Vercel AI SDK, multi-agent tool-calling, Databricks",
    },
    { input: "mode", output: "Remote · Chicago, IL" },
  ],
  skillsDisplay: [
    {
      emoji: "🤖",
      title: "Applied AI & LLM",
      bullets: [
        "Production RAG, English-to-SQL co-agents, streaming tool-calling",
        "Multi-agent orchestration, MCP integrations, evaluation & quality gates",
      ],
    },
    {
      emoji: "🧠",
      title: "ML & computer vision",
      bullets: [
        "PyTorch / TensorFlow, MobileNet & DINOv2, model compression, FiftyOne",
        "Dataset curation at scale and self-serve ML platform handoffs",
      ],
    },
    {
      emoji: "⚙️",
      title: "Platforms & data",
      bullets: [
        "PostgreSQL (pgvector, RLS), Delta Lake / Unity Catalog, GPU inference pipelines",
        "Docker, CI/CD, observability-minded delivery",
      ],
    },
    {
      emoji: "🧩",
      title: "Web & product",
      bullets: [
        "Next.js 15, React 19, TypeScript, Stripe billing, agency-scoped RBAC",
        "End-to-end ownership from UI to API and schema design",
      ],
    },
  ],
  howIHelp: [
    {
      step: 1,
      emoji: "💡",
      title: "Plan",
      description:
        "Clarify problem, constraints, and success metrics — then design architecture (agents, data, APIs, and cost/latency tradeoffs).",
      outcome: "A concrete build plan with scope, risks, and milestones.",
    },
    {
      step: 2,
      emoji: "🛠️",
      title: "Build",
      description:
        "Implement end-to-end: models and pipelines, app surfaces, persistence, and integration with real providers.",
      outcome: "Working software in production-like environments, not slide decks.",
    },
    {
      step: 3,
      emoji: "🚀",
      title: "Ship",
      description:
        "Multi-tenancy, auth, billing, migrations, and the operational glue that makes AI usable by real users.",
      outcome: "Reliable releases with clear rollback and ownership.",
    },
    {
      step: 4,
      emoji: "🔧",
      title: "Improve",
      description:
        "Iterate on quality, cost, and throughput — documentation and handoffs so teams can move without bottlenecks.",
      outcome: "Measurable improvement and sustainable maintenance.",
    },
  ],
  skillsSectionTitle: "Skills",
  howIHelpTitle: "How I Help",
  featuredProjectsTitle: "Featured Projects",
  trustedByTitle: "Experience",
  /** Employer / client names (text strip — swap for logos later if you want) */
  trustedByNames: ["John Deere", "RLI Insurance"],
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description:
    "AI Engineer shipping production LLM systems, multi-agent pipelines, and computer vision at scale. Founder of Speaksense and Klarix.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.linkedin.com/in/michael-baylard/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI Engineer shipping production LLM systems, multi-agent pipelines, and computer vision at scale. Built two AI
        products from zero — a multi-tenant RAG co-agent with streaming inference and a config-driven agentic pipeline
        orchestrating 6 LLM providers. Deployed real-time classification across 38M+ sensor images on GPU clusters (F1 =
        0.92) at John Deere. $82M+ measurable business impact.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Speaksense",
        timeframe: "2024 – Present",
        role: "Founder & AI Engineer",
        achievements: [
          <>
            Architected production RAG system with English-to-SQL co-agent — parallel tool-calling synthesizes
            multi-channel analytics in real time via streaming inference (Vercel AI SDK v5) with persistent chat memory.
          </>,
          <>
            Built multi-tenant AI platform: 35+ PostgreSQL tables, agency-scoped RBAC (JSONB permissions), pgvector
            embeddings for semantic search, Stripe subscription billing with webhook-driven plan management.
          </>,
          <>
            Registered 8 AI tools in agentic orchestration layer: channel analysis, natural language SQL generation,
            thumbnail evaluation, competitor intelligence, image generation, community trend analysis.
          </>,
          <>
            Integrated 6 MCP servers for automated documentation, database queries, and git workflows — 10x development
            velocity.
          </>,
          <>
            <em>
              Stack: Next.js 15, React 19, TypeScript, Neon PostgreSQL (pgvector), OpenAI GPT-4, Vercel AI SDK v5,
              Stripe, Docker
            </em>
          </>,
        ],
        images: [],
      },
      {
        company: "Klarix",
        timeframe: "2026 – Present",
        role: "Founder & AI Pipeline Engineer",
        achievements: [
          <>
            Architected config-driven agentic pipeline orchestrating 6 LLM providers with cost-optimized model
            allocation: MiniMax M2.7 Highspeed (ICP scoring), Gemini 3.1 Pro (research synthesis), Claude 4.5 Opus
            (outreach generation), Groq Compound + Llama 70B (information collection), Tavily (deep research).
          </>,
          <>
            Engineered multi-tier failover (MiniMax → OpenRouter → Groq), rate limiting (450–950 RPM), auto-scaling
            workers up to 128 threads, and crash-safe incremental JSONL processing with thread-safe append-under-lock.
          </>,
          <>
            Scored 17,700+ companies and 6,300+ contacts via multi-stage AI enrichment; 78% verified email rate; full
            pipeline completes in under 3 hours — weeks of manual research compressed to same-day delivery.
          </>,
          <>
            <em>
              Stack: Python, MiniMax M2.7, Gemini 3.1 Pro, Claude 4.5 Opus, Groq Compound + Llama 70B, Tavily, Apollo
              API, Playwright, PyMuPDF
            </em>
          </>,
        ],
        images: [],
      },
      {
        company: "John Deere",
        timeframe: "2023 – 2026",
        role: "AI Engineer / Data Scientist",
        achievements: [
          <>
            Deployed real-time classification pipeline on A10 GPU clusters processing 38M+ sensor images — F1 improved
            from 0.44 to 0.92 through 8 months of iterative dataset curation, model compression (SwinTransformer →
            MobileNetV2), and DINOv2 embedding-based expansion.
          </>,
          <>
            Curated 15,000-image training dataset from 38M+ corpus using embedding distance — engineered self-serve
            workflow enabling 4,000+ images added post-handoff without data science involvement.
          </>,
          <>
            Built 7-table real-time analytics backend (raw telemetry → 1Hz aggregation → dashboard-ready) powering field
            operations across 300+ acre deployments.
          </>,
          <>
            Defined 17 system metrics with Systems Engineering — the specification contract consumed by all downstream
            analytics and engineering teams.
          </>,
          <>
            Delivered zero-follow-up platform handoff — 13 documentation files enabling full CVML self-service;
            praised for &quot;extensive documentation&quot;.
          </>,
          <>
            Analytics influenced $82M+ revenue across FY23–24; integrated international (Brazil) sensor data without
            re-engineering.
          </>,
          <>
            <em>
              Stack: Python, PyTorch, TensorFlow/Keras, MobileNet, DINOv2, FiftyOne, Databricks (Delta Lake, Unity
              Catalog, GPU clusters), PyCaret, OpenCV
            </em>
          </>,
        ],
        images: [],
      },
      {
        company: "RLI Insurance Company",
        timeframe: "2021 – 2022",
        role: "Data Engineer Intern",
        achievements: [
          <>
            Modernized enterprise analytics infrastructure, designing dimensional data models and implementing SQL-based
            transformations for underwriting and risk reporting.
          </>,
          <>
            Optimized ETL processes achieving 70% reduction in refresh times while enabling near real-time analytics
            capabilities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Bradley University",
        description: (
          <>
            Bachelor of Science in Computer Science - Data Science &amp; Cybersecurity, graduated May 2022. GPA: 3.62
          </>
        ),
      },
      {
        name: "Certifications",
        description: <>Microsoft Certified: Power BI Data Analyst Associate</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI / LLM",
        description: (
          <>
            RAG (pgvector, vector search), OpenAI GPT-4, Anthropic Claude, Vercel AI SDK v5, agentic orchestration (MCP
            servers, LangChain, parallel tool-calling), prompt engineering, LLM evaluation, English-to-SQL, streaming
            inference.
          </>
        ),
        images: [],
      },
      {
        title: "ML / Computer Vision",
        description: (
          <>
            PyTorch, TensorFlow/Keras, MobileNet, EfficientNet, SwinTransformer, DINOv2, model compression, FiftyOne,
            MLflow, scikit-learn, OpenCV.
          </>
        ),
        images: [],
      },
      {
        title: "Infrastructure & Data",
        description: (
          <>
            GPU clusters (A10/g5), Databricks (Delta Lake, Unity Catalog), PostgreSQL (Neon — pgvector, RLS, JSONB),
            Docker, CI/CD (GitHub Actions), AWS, Vercel.
          </>
        ),
        images: [],
      },
      {
        title: "Languages",
        description: <>Python, TypeScript/JavaScript, SQL, Bash.</>,
        images: [],
      },
      {
        title: "Web / Product",
        description: <>Next.js 15, React 19, Tailwind CSS, shadcn/ui, Stripe, FastAPI.</>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Production AI systems and case studies by ${person.name} — Speaksense, Klarix, and FurrowVision.`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `Visuals from Speaksense, Klarix, and FurrowVision — production AI and computer vision work.`,
  images: [
    {
      src: "/images/projects/speaksense/img1.png",
      alt: "Speaksense co-agent chat and analytics",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/speaksense/img2.png",
      alt: "Speaksense agency dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/speaksense/img3.png",
      alt: "Speaksense tool-calling and AI UI",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/klarix/img1.png",
      alt: "Klarix competitive intelligence platform",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/klarix/img2.png",
      alt: "Klarix prospect dossier deliverable",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/furrowvision/img1.jpg",
      alt: "FurrowVision field hardware and trade show",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/furrowvision/img2.jpg",
      alt: "FurrowVision sensor and deployment",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/furrowvision/img3.jpg",
      alt: "FurrowVision computer vision in the field",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/furrowvision/img4.jpg",
      alt: "FurrowVision precision agriculture imagery",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/furrowvision/img5.jpg",
      alt: "FurrowVision system overview",
      orientation: "horizontal",
    },
  ],
};

export { person, social, site, home, about, work, gallery };
