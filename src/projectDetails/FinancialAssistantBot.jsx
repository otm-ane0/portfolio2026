import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Fashion E-Commerce Platform",
category: "Full-Stack Web Development",
heroImg: "/eco2.png",
tagline:
"A modern fashion e-commerce website that delivers a seamless shopping experience with a clean UI, fast performance, and responsive design across all devices.",
year: "2026",
stack: [
"React / Next.js",
"Tailwind CSS",
"Node.js",
"MongoDB",
"Stripe / Payment Integration",
"Vercel Deployment",
],
features: [
"Product browsing with dynamic categories and filters for a smooth shopping experience.",
"Responsive product pages optimized for mobile, tablet, and desktop devices.",
"Shopping cart system with real-time updates and persistent state.",
"Secure checkout flow with integrated payment gateway support.",
"Modern UI design focused on fashion-oriented visuals and user engagement.",
"Fast performance with optimized asset loading and server-side rendering.",
],
impact: [
"Improves online shopping experience by making product discovery fast and intuitive.",
"Increases user engagement through a visually appealing and modern interface.",
"Demonstrates real-world full-stack development skills in a production-ready e-commerce setup.",
],
  links: {
    live: "https://t.me/zickrian_bot",
    repo: "https://github.com/zickrian/Accounting-Assistant",
  },
};

export default function FinancialAssistantBot({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
