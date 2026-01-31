import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Samir Kadri | Mechanical Engineer",
  author: "Samir Kadri",
  description:
    "Mechanical Engineering Grad Student at UofT specializing in Computational Mechanics, CFD, and FEA.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:samir.kadri@mail.utoronto.ca" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/samirskadri/" },
  ],
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Samir Kadri",
    specialty: "mechanical engineering grad student",
    summary:
      "enjoys designing, analyzing, and building high-performance components",
    email: "samir.kadri@mail.utoronto.ca",
  },
  experience: [
    {
      company: "Flow Robotics | The Entrepreneurship Hatchery",
      position: "Mechanical Engineering Intern",
      startDate: "Sept 2024",
      endDate: "Sept 2025",
      summary: "Worked on the product design and prototyping of a small intestine entroscopy device.",
    },
    {
      company: "TATA Motors",
      position: "Project Intern",
      startDate: "June 2023",
      endDate: "Sept 2023",
      summary: "Summer-long stint at TATA Motors.",
    },
    {
      company: "Polyvault Auto",
      position: "Product Design Intern",
      startDate: "June 2021",
      endDate: "Sept 2021",
      summary: "Summer-long stint at Polyvault Auto.",
    },
  ],
  projects: [
    {
      name: "University of Toronto Formula Racing - FSAE",
      summary: "Designed and manufactured critical vehicle systems, specializing in high-performance suspension and aerodynamics components. Developed rear suspension uprights for in-hub motor integration and 23.3% performance increase in front wing/nosecone.",
      linkPreview: "https://fsaeutoronto.ca/",
      image: "/projects/fsae/ut-fsae-final.jpg",
    },
    {
      name: "SparkJet Actuator Model Development",
      summary: "High-fidelity CFD model for Spark-Jet actuators to simulate complex phenomena like peak jet velocity and flow reattachment using COMSOL Multiphysics on HPC clusters.",
      image: "/shopify-clon.png",
    },
    {
      name: "Python based CFD Solver",
      summary: "Developed a high-fidelity CFD solver in Python for steady, incompressible flow, implementing SIMPLE algorithm and GMRES linear solver on a collocated finite-volume grid.",
      linkPreview: "/Assignment4_SamirKadri_1011619303.pdf",
      image: "/clone-ig.png",
    },
    {
      name: "Generalized Stochastic Microcontact Model",
      summary: "Developed a generalized 3D stochastic microcontact model on MATLAB to predict mechanical power loss of helical gears and elliptical contacts.",
      image: "/spotifu.png",
    },
    {
      name: "VJTI Racing e-BAJA",
      summary: "Led end-to-end development of suspension package, bridging kinematic simulation and precision manufacturing. Ranked 1st in Design at ATVC India 2023.",
      image: "/shopify-clon.png",
    },
    {
      name: "AeroVJTI - AIAA Design/Build/Fly",
      summary: "Spearheaded design of high-strength, lightweight airframe components using topology optimization and innovative foldable wing mechanism.",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      <p class="mb-6">I'm currently pursuing my MEng in Mechanical Engineering at <strong class="text-[var(--text-heading)]">The University of Toronto</strong>, with a specialization in Computational Mechanics. I recently completed an internship at a med-tech startup, funded by <strong class="text-[var(--text-heading)]">The Entrepreneurship Hatchery</strong>, where I worked on the product design and prototyping of a small intestine entroscopy device. My prior internship experiences also include summer-long stints at <strong class="text-[var(--text-heading)]">TATA Motors</strong> and <strong class="text-[var(--text-heading)]">PolyVault Auto</strong>.</p>

      <p class="mb-6">As a mechanical engineer, I enjoy bridging the gap between simulation and real-world performance by combining computational mechanics, CFD, and FEA with practical design and testing. Through my work in the <strong class="text-[var(--text-heading)]">Turbulence Research Lab</strong> on active flow devices, and on <strong class="text-[var(--text-heading)]">The University of Toronto Formula Racing Team</strong> in the aerodynamics and suspension sections, my goal is to develop designs and simulation workflows that are numerically robust, and translate into components that are manufacturable, reliable and high-performing.</p>

      <p><strong class="text-[var(--text-heading)]">When I'm not working on bringing CAD models to life</strong>, I'm probably watching sports, immersed in a video game, or experimenting in the kitchen.</p>
    `,
    image: "/alejandro-big.jpg",
  },
  skills: {
    title: "Skills",
    data: [
      {
        category: "CAD Tools",
        skills: ["SolidWorks", "CATIA", "Fusion 360", "AutoCAD"],
      },
      {
        category: "CFD and FEA Tools",
        skills: ["Siemens STAR-CCM+", "COMSOL Multiphysics", "ANSYS Fluent", "ANSYS Mechanical"],
      },
      {
        category: "Languages",
        skills: ["Python", "MATLAB"],
      },
      {
        category: "Other Skills",
        skills: ["HPC Workflows", "Lotus Suspension Analysis - SHARK", "MSC Adams", "GD&T"],
      },
    ],
  },
};

// #5755ff
