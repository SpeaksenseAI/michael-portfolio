import { home, person } from "./content";

// Production site URL — used for SEO meta tags and schema
const baseURL = "https://michael-baylard.dev";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/resources": true,
  "/gallery": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/furrowvision": false,
  "/work/speaksense": false,
  "/work/klarix": false,
};

import { Inter, IBM_Plex_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const heading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const label = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const code = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
// Trust-forward palette: blue + white/gray surfaces; warm accent (orange) = gold-adjacent highlights
const style = {
  theme: "light",
  neutral: "gray",
  brand: "blue",
  accent: "orange",
  solid: "contrast",
  solidStyle: "flat",
  border: "conservative",
  surface: "filled",
  transition: "micro",
  scaling: "100",
};

const dataStyle = {
  variant: "flat",
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  }
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Michael Baylard",
  description: home.description,
  email: "",
};

// Social profiles for schema (sameAs)
const sameAs = {
  linkedin: person.linkedin,
  github: person.github,
};

export { display, mailchimp, routes, protectedRoutes, baseURL, fonts, style, schema, sameAs, effects, dataStyle };
