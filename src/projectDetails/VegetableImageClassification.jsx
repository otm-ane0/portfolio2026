import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Dawn Shopify WebSite",
  category: "full-Stack Development",
  heroImg: "/h2o2.png",
  tagline:
    "A modern web platform designed to provide a fast, responsive, and interactive user experience with clean UI, smooth navigation, and optimized performance for showcasing digital projects and creative content.",
  year: "2026",
  stack: ["Next.js", "TypeScript", "Gsap", "Tailwind CSS", ],
 features: [
"Simple and intuitive interface: allows users to easily navigate and interact with the platform without complexity.",
"Fast performance: optimized for smooth loading and quick responses across all devices.",
"Responsive design: fully adapts to mobile, tablet, and desktop screens for a consistent experience.",
"Clean and modern UI: focused on simplicity and clarity to enhance user engagement.",
"Project showcase system: enables users to present creative work in a structured and professional way.",
"Interactive experience: designed to make browsing and exploring content more engaging and dynamic.",
],
 impact: [
"Improves user experience by making interaction with the platform fast, simple, and intuitive across all devices.",
"Enhances engagement through a clean and responsive UI that feels modern and professional.",
"Strengthens project presentation by providing a structured way to showcase creative work effectively.",
"Demonstrates practical implementation of front-end development skills in a real-world style web application.",
],
  links: {
    live: "https://loss-two.vercel.app/",
    repo: "https://github.com/otm-ane0/h2ofloss",
  },
};

export default function VegetableImageClassification({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
