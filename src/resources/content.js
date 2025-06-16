const person = {
  firstName: "Nick",
  lastName: "Natalie",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UX Designer",
  avatar: "/images/avatar.jpg",
  email: "NickJohnNatalie@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  linkedin: "https://www.linkedin.com/in/nick-natalie/",
  logo: "/images/projects/logo.png",
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
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming complex challenges into intuitive experiences</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">Fleet Management Redesign</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Nick, a UX Designer with a B.S. in User Experience Design from Bradley University. I specialize in user research, wireframing, and prototyping
      <br /> to create meaningful experiences that solve real problems and drive business results.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        User Experience Designer with a B.S. in User Experience Design and hands-on experience 
        improving digital workflows through user research, wireframing, and prototyping. 
        I&apos;ve redesigned asset-tracking interfaces, optimized paperless billing systems, and 
        created user-friendly platforms that serve hundreds of community members. Skilled in 
        Figma, Sketch, accessibility compliance, and agile methodologies, I&apos;m adept at 
        translating stakeholder feedback into intuitive UI solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Caterpillar",
        timeframe: "2021",
        role: "Visual Designer / User Tester",
        achievements: [
          <>
            Led UI/UX design for fleet management software, conceptualizing and prototyping 
            solutions using Figma, winning 1st place in a competitive contest.
          </>,
          <>
            Addressed critical user pain points related to asset tracking, designing an intuitive 
            management page with calendar, spreadsheet, and advanced filtering views.
          </>,
          <>
            Conducted usability testing sessions with end users, yielding a 15% increase in user 
            satisfaction based on post-redesign surveys.
          </>,
        ],
        images: [],
      },
      {
        company: "Jolt Foundation",
        timeframe: "2021",
        role: "User Experience Designer",
        achievements: [
          <>
            Rebuilt and rebranded the organization&apos;s website, creating a user-friendly platform 
            that provided resources to over 500 local community members.
          </>,
          <>
            Optimized the site&apos;s responsiveness across all devices, achieving 100% mobile 
            compatibility and reducing page load times by 40%.
          </>,
          <>
            Presented four unique design options using wireframes and prototypes, resulting in 
            a 50% increase in website traffic post-launch.
          </>,
        ],
        images: [],
      },
      {
        company: "Pekin Insurance",
        timeframe: "2020 - 2021",
        role: "User Experience Designer",
        achievements: [
          <>
            Utilized design thinking methodologies to solve complex user interaction challenges, 
            resulting in a more intuitive interface that reduced onboarding time by 30%.
          </>,
          <>
            Conducted usability testing with internal stakeholders and end-users, improving 
            user satisfaction by 20%.
          </>,
          <>
            Collaborated with cross-functional teams to ensure seamless implementation of design 
            elements, reducing time to deployment by 15%.
          </>,
        ],
        images: [],
      },
      {
        company: "The Walt Disney Company",
        timeframe: "Aug 2023 - Jan 2024",
        role: "Hotel Concierge / Guest Relations",
        achievements: [
          <>
            Used critical thinking and problem-solving skills to quickly develop tailored solutions 
            for individual guest needs, applying user-centered design principles to address pain 
            points and improve the overall guest experience.
          </>,
          <>
            Built positive connections with over 400 guests daily through genuine, enthusiastic 
            interactions, contributing to a 15% increase in positive feedback scores and demonstrating 
            strong user empathy skills essential for UX design.
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
        description: <>Bachelor of Science in User Experience Design, graduated May 2022.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "UX Design & Research",
        description: <>Expert in user research, user flows, journey mapping, empathy mapping, persona creation, and usability testing with WCAG & ADA compliance.</>,
        images: [],
      },
      {
        title: "Design Tools",
        description: <>Proficient in Figma, Sketch, Adobe XD, Webflow, and Elementor for wireframing, prototyping, and responsive web design.</>,
        images: [],
      },
      {
        title: "Methodologies",
        description: <>Experienced in Agile Product Development, Scrum, and Design Thinking processes for effective stakeholder communication and client relationship management.</>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `A showcase of design work and project visuals by ${person.name}`,
  // Images from work projects showcasing UX design process and outcomes
  images: [
    // Randomized order of all project images - all 16x9 horizontal format
    {
      src: "/images/projects/jolt/img3.png",
      alt: "Mobile responsive design mockups",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img1.png",
      alt: "Caterpillar fleet management interface design",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img2.png",
      alt: "Streamlined onboarding process design",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img5.png",
      alt: "Final website design implementation",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img4.png",
      alt: "User testing session results",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img1.png",
      alt: "Insurance interface user flow diagram",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img1.png",
      alt: "Jolt Foundation website homepage design",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img3.png",
      alt: "Fleet management dashboard prototype",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img5.png",
      alt: "Final insurance interface design",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img2.png",
      alt: "Community resources page layout",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img2.png",
      alt: "Asset tracking calendar view wireframe",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img4.png",
      alt: "Usability testing feedback analysis",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/jolt/img4.png",
      alt: "Website performance optimization results",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/caterpillar/img5.png",
      alt: "Final fleet management interface",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pekin/img3.png",
      alt: "Insurance dashboard wireframes",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
