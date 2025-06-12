"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m Abdullahi Hassan, a Data scientist specializing in social-impact projects. Armed with{" "}
        <span className="font-medium">Python</span> (pandas, scikit-learn, TensorFlow) and{" "}
        <span className="font-medium">R</span> (tidyverse, lme4, rstan), I build end-to-end pipelines that turn messy field data into actionable insights—no fluff, just rigor.
      </p>

      <p className="mb-3">
        I design and run RCTs from sampling frames to clean survey exports (ODK, Python scripts), ensuring true randomization and sufficient power. My modeling toolbox spans{" "}
        <span className="font-medium">causal inference</span> (DiD, IV, Bayesian hierarchies) and{" "}
        <span className="font-medium">machine learning classifiers</span>, always questioning assumptions: “Are we measuring what truly matters? what’s missing from our data?”
      </p>

      <p>
        I automate workflows with Docker, Makefiles, Airflow, and SQLAlchemy, then surface results in interactive dashboards using{" "}
        <span className="font-medium">R Shiny</span>, <span className="font-medium">Plotly</span>, and{" "}
        <span className="font-medium">Power BI</span>. My focus is on pragmatic rigor and real impact—not vanity metrics. 
        If you need someone to call out weak causal links, write production-grade Python/R code, and keep your RCT honest, let's connect.
      </p>
    </motion.section>
  );
}
