import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Exam Preparation Platform",
  category: "EdTech Platform",
  heroImg: "/prep2.png", 
  tagline:
    "A smart platform designed to help students prepare for exams through structured content, practice tests, and performance tracking.",
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
    "Practice exams with multiple question types (MCQ, short answer, etc.).",
    "Timed quizzes to simulate real exam conditions.",
    "Subject and topic-based organization for easy navigation.",
    "Instant feedback and detailed explanations for answers.",
    "Progress tracking with performance analytics.",
    "User accounts to save results and track improvement.",
    "Responsive design for studying on mobile and desktop.",
  ],
  impact: [
    "Helps students prepare efficiently with structured learning paths.",
    "Improves exam readiness through realistic practice tests.",
    "Provides insights into strengths and weaknesses.",
    "Enhances learning experience with interactive and accessible tools.",
  ],
  links: {
    repo: "https://github.com/otm-ane0",
  },
  notes: "Access Restricted: This website is only accessible using Udinus student email (@mhs.dinus.ac.id)."
};

const accessNotice = (
  <div className="mb-10 border-4 border-black bg-red-200 p-8">
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
      Exclusive Project
    </h2>
    <p className="text-lg font-medium leading-relaxed">
      This platform was crafted as a freelance project for a university professor in Brazil through Upwork. 
      While the full source code remains private due to professional agreements, the project highlights my expertise 
      in building high-quality, scalable, and user-centered educational solutions tailored to real-world needs.
    </p>
  </div>
);

export default function ExamPreparationPlatform({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      preFeatureSection={accessNotice}
      mode={mode}
    />
  );
}
