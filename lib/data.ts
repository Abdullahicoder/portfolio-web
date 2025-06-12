import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Puntlandelction.png"; // fixed the import alias
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Economics",
    location: "East Africa University",
    description:
      "Studied econometrics, statistics, and development economics with a focus on quantitative methods for evaluating economic and social programs.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Sadar Development and Resilience Institute",
    location: "Data Analyst | ME Officer ",
    description:
      "Led M&E processes, designed indicators, and analyzed field data to assess program effectiveness. Produced actionable insights using R and Python for evidence-based decision-making.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Data Analyst (Freelance)",
    location: "Upwork",
    description:
      "Analyzed and visualized client data using R, Python, and Tableau, with a focus on surveys, impact evaluations, and dashboards for NGOs and SMEs.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: " Data, Economics, and Design of Policy",
    location: "MIT | J-pal",
    description:
      "Studied advanced topics in impact evaluation, econometrics, and policy design. Gained hands-on experience applying RCTs, causal inference, and data analysis techniques to real-world development challenges.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2025",
  }
] as const;

export const projectsData = [
  {
    title: "PL Elections Analysis",
    description:
      "Analyzed Puntland local council election data using R and Tableau. Delivered dashboards and performance insights for political parties and civic groups.",
    tags: ["R", "Tableau", "Python", "Data Cleaning", "Visualization"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Impact Evaluation",
    description:
      "Analyzed J-PAL RCT data from Pratham’s CAL program. Conducted power analysis, sample sizing, and compliance adjustments in R.",
    tags: ["RCT", "R", "Power Analysis", "TARL", "Data Visualization"],
    imageUrl: rmtdevImg,
  }
  
  
  ,
  {
    title: "Migration Drivers",
    description:
      "Analyzed Somalia IDP Flow data using Python to identify conflict, drought, and economic drivers of displacement for policy insights.",
    tags: ["Python", "Pandas", "Plotly", "Statsmodels", "Migration"],
    imageUrl: wordanalyticsImg,
  }
  ,
] as const;

export const skillsData = [
  "R",
  "tidyverse",
  "lme4",
  "rstan",
  "Python",
  "pandas",
  "scikit-learn",
  "TensorFlow",
  "SQL",
  "SQLAlchemy",
  "Airflow",
  "Docker",
  "R Shiny",
  "Plotly",
  "Power BI",
  "Git",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Framer Motion"
] as const;
