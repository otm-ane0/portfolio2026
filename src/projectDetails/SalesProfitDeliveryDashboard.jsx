import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Sales, Profit & Delivery Dashboard",
  category: "Full-Stack Development",
  heroImg: "/dash.png",
  tagline:
    "Full-Stack Laravel Developer (Dashboard & Business Logic).",
  year: "2025",
  stack: [
    "laravel",
    "ReactJS",
    "TailwindCSS",
    "MySQL",
    "REST API",
  ],
  features: [
    "Sales dashboard with advanced date & monthly filtering (agenda-style)",
    "Multi-product sales management with automatic profit calculation",
    "Delivery workflow tracking (in-store, packaged, out for delivery, delivered)",
    "Real-time stock updates and inventory management",
    "Financial insights based on cost price vs selling price.",
  ],
  impact: [
    "Improved business visibility on revenue and profit",
    "Reduced manual tracking errors in stock and delivery",
    "Enabled faster and more informed decision-making",
  ],
  links: {
    live: "https://calculatorathletes-production.up.railway.app/",
    repo: "https://github.com/otm-ane0/calculator_athletes",
  },
};

export default function SalesProfitDeliveryDashboard({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
