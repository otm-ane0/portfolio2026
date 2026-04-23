import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "IK Nettoyage — Cleaning Services Website Redesign",
  category: "Front-End Development / UI & UX Design",
  heroImg:"/nett.png",
  tagline:
    "Redesigned and developed a modern, responsive website for a cleaning services company to improve online presence, build trust, and increase lead generation.",
  year: "2025",
  stack: ["React", "Tailwind",  "Vue.js", "css"],
  features: [
    "Responsive and mobile-first design",
    "Clean and user-friendly service presentation",
    "Optimized performance and fast loading times",
    "Clear call-to-action for lead generation (calls & contact forms)",
    "Improved visual branding (typography, colors, layout)",
  ],
  impact: [
    "Increased user engagement and time spent on the site.",
    "Improved lead generation (calls and form submissions).",
    "Stronger brand credibility and professional online presence.",
  ],
  links: {
    live: "https://ik-nettoyage-test.netlify.app/",
    repo: "https://github.com/otm-ane0/ik-nettoyage",
  },
};

export default function IKNettoyageCleaningServicesWebsiteRedesign({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
