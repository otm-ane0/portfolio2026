import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
    title: "Education Question Platform",
  category: "EdTech Platform",
  heroImg: "/edu.png", 
  tagline:
    "A full-featured platform for managing and exporting math & science questions with advanced filtering, LaTeX support, and seamless downloads.",
  year: "2025",
  stack: [
    "Laravel",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "mathjax",
    "MercadoPago API",
    "laTeX",
  ],
  role: "Full-stack Developer",
  features: [
    "Advanced filtering system by education level, subject, and topic.",
    "Preview and select questions before exporting.",
    "Export questions in Word and LaTeX formats with equations.",
    "Automatic ZIP generation with organized files and embedded images (.png).",
    "Send selected questions directly via email.",
    "Secure payment system with automatic credit management using MercadoPago.",
    "Responsive design for smooth use across devices.",
    "Admin dashboard for managing content and users.",
  ],
  impact: [
    "Saves teachers time by simplifying question selection and formatting.",
    "Provides ready-to-use educational materials in multiple formats.",
    "Improves workflow with automated exports and email delivery.",
    "Ensures secure and smooth transactions for platform credits.",
  ],
  links: {
    live: "https://edufacilita.com.br/",
    repo: "https://github.com/otm-ane0/Edufacilita",
  },
};

export default function EducationQuestionPlatform({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
