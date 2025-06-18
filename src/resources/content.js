const person = {
  firstName: "Michael",
  lastName: "Baylard",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "baylardmichael@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  linkedin: "https://www.linkedin.com/in/michaelbaylard",
  // logo: "/images/projects/logo.png",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: person.linkedin,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/Michael Baylard - Resume.pdf",
    target: "_blank",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into actionable insights and scalable solutions</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">FurrowVision Computer Vision System</strong></>,
    href: "/work/furrowvision",
  },
  subline: (
    <>
      I&apos;m Michael, a Data Scientist with a B.S. in Computer Science from Bradley University. I specialize in machine learning, data engineering, and analytics
      <br /> to create scalable solutions that drive business results and optimize complex systems.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Chicago, IL`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Data scientist with a strong foundation in data engineering, specializing in the design, optimization, and deployment of scalable analytics solutions. 
        Experienced in delivering high-impact data products within the enterprise aftermarket division at John Deere, with a focus on precision upgrade analytics, 
        warranty forecasting, and dealer insights. Technical expertise includes Databricks, PySpark, Delta Lake, Power BI, and large-scale ETL workflows 
        supporting 100M+ row transformations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "John Deere",
        timeframe: "2024 - Present",
        role: "Data Scientist - ISG A&A FurrowVision",
        achievements: [
          <>
            Architected end-to-end machine learning workflows, curating and annotating 10,000+ 
            agricultural field images while implementing automated feature extraction pipelines 
            for production-grade computer vision systems.
          </>,
          <>
            Co-developed PyTorch convolutional neural networks achieving 92% validation accuracy 
            for multi-class agronomic feature detection with advanced data augmentation and 
            GPU-accelerated training strategies.
          </>,
          <>
            Revolutionized annotation workflows through automated feature detection and active 
            learning protocols, reducing per-image labeling time by 76% through intelligent 
            model-assisted annotation.
          </>,
          <>
            Optimized PySpark machine learning pipelines processing 92M+ image/metadata records, 
            achieving 87.5% runtime reduction through distributed computing and model parallelization.
          </>,
        ],
        images: [],
      },
      {
        company: "Speaksense",
        timeframe: "2023 - Present",
        role: "Founder & Full-Stack Data Scientist",
        achievements: [
          <>
            Built Next.js/React streaming analytics platform with Vercel AI SDK integration, 
            achieving sub-2-second response times and processing 1M+ weekly records.
          </>,
          <>
            Engineered high-performance batch and parallel ingestion systems for YouTube metrics, 
            delivering 90% processing speed improvement for large-scale analytics workloads.
          </>,
          <>
            Implemented cost-effective GPT-4.1 API with Zod-validated SQL tool-calling system, 
            providing personalized analytics at ~$1 per 1,000 queries through optimized 
            prompt engineering.
          </>,
          <>
            Developed interactive D3.js and Tremor chart systems with custom tooltips for 
            time-series analysis of engagement metrics and CTR optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "John Deere",
        timeframe: "2023 - 2024",
        role: "Data Engineer - Aftermarket & Customer Sales",
        achievements: [
          <>
            Architected PySpark-based recommendation engines processing 500K+ machine records, 
            implementing advanced feature engineering and model deployment pipelines for 
            scalable eCommerce integration.
          </>,
          <>
            Engineered machine learning models for PowerGard and JDProtect eligibility prediction, 
            applying statistical analysis and clustering algorithms to categorize 654K machines 
            by lifecycle patterns, enabling $107K in dealer reimbursements.
          </>,
          <>
            Developed sophisticated data science solutions and mentored enterprise teams on 
            advanced analytics techniques, leading cross-functional initiatives and resolving 
            complex statistical modeling challenges.
          </>,
          <>
            Delivered predictive analytics and recommendation systems contributing $52M+ in revenue 
            across precision agriculture, warranty, and aftermarket segments through data-driven 
            machine learning approaches.
          </>,
        ],
        images: [],
      },
      {
        company: "John Deere",
        timeframe: "2022 - 2023",
        role: "BI Analyst - John Deere Financial",
        achievements: [
          <>
            Optimized Power BI reporting by converting queries to native Databricks API, 
            reducing refresh times from 5-10 minutes to 20 seconds.
          </>,
          <>
            Developed operational analytics dashboards replacing manual processes with 
            automated daily-refreshed Power BI reports.
          </>,
          <>
            Created JDF Mid-Market and Credit Lens dashboards showcased at leadership meetings 
            for strategic decision-making.
          </>,
        ],
        images: [],
      },
      {
        company: "RLI Insurance Company",
        timeframe: "2021 - 2022",
        role: "Data Engineer Intern",
        achievements: [
          <>
            Modernized enterprise analytics infrastructure, designing dimensional data models 
            and implementing SQL-based transformations for underwriting and risk reporting.
          </>,
          <>
            Optimized ETL processes achieving 70% reduction in refresh times while enabling 
            near real-time analytics capabilities.
          </>,
          <>
            Collaborated with business stakeholders to align technical solutions with compliance 
            and operational requirements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bradley University",
        description: <>Bachelor of Science in Computer Science - Data Science & Cybersecurity, graduated May 2022. GPA: 3.62</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Data Science & Machine Learning",
        description: <>Expert in PyTorch, computer vision, natural language processing, statistical analysis, and predictive modeling with production deployment experience.</>,
        images: [],
      },
      {
        title: "Data Engineering & Analytics",
        description: <>Proficient in PySpark, Databricks, Delta Lake, SQL, ETL pipelines, and large-scale data processing with enterprise-grade solutions.</>,
        images: [],
      },
      {
        title: "Cloud & Development",
        description: <>Experienced in GCP, Docker, GitHub Actions CI/CD, Next.js, PostgreSQL, and full-stack development for data-driven applications.</>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data science and engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `A showcase of data science work and project visuals by ${person.name}`,
  // Images from work projects showcasing data science process and outcomes
  images: [
    // Randomized order of all project images - all 16x9 horizontal format
    {
      src: "/images/projects/jolt/img3.png",
      alt: "FurrowVision computer vision model training results",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img1.png",
      alt: "John Deere aftermarket recommendations dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img2.png",
      alt: "RLI Insurance analytics pipeline architecture",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img5.png",
      alt: "Agricultural field image annotation workflow",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img4.png",
      alt: "PySpark data processing performance metrics",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img1.png",
      alt: "Insurance data warehouse dimensional model",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img1.png",
      alt: "Computer vision model accuracy validation",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img3.png",
      alt: "Machine learning pipeline deployment",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img5.png",
      alt: "ETL performance optimization results",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img2.png",
      alt: "Speaksense analytics platform interface",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img2.png",
      alt: "Revenue impact analytics dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img4.png",
      alt: "Real-time data streaming architecture",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img4.png",
      alt: "Machine learning model inference optimization",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img5.png",
      alt: "Data science project outcome visualization",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img3.png",
      alt: "Enterprise analytics infrastructure design",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
