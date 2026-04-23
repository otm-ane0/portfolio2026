import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
 title: "Inventory Management Application",
  category: "Business Management System",
  heroImg: "/ima.png", 
  tagline:
    "A smart inventory management system for tracking stock, managing orders, and optimizing business operations in real time.",
  year: "2025",
  stack: [
    "React",
    "JavaScript",
    "SQL",
    "Front-End Development",
    "Back-End Development",
  ],
  role: "Inventory Manager",
  features: [
    "Real-time stock tracking and inventory updates.",
    "Automated reordering system to prevent stock shortages.",
    "Item categorization for better organization and search.",
    "Barcode scanning for quick product management.",
    "Stock alerts and notifications for low inventory levels.",
    "Supplier management to track vendors and orders.",
    "Comprehensive reporting dashboards with analytics.",
  ],
  impact: [
    "Reduces stock shortages and overstocking issues.",
    "Improves efficiency in inventory tracking and order management.",
    "Supports better decision-making through real-time analytics.",
    "Streamlines workflows across retail, manufacturing, and logistics operations.",
  ],
  links: {
    live: "https://inventory-demo-test.netlify.app/",
    repo: "https://github.com/otm-ane0",
  },
};

export default function InventoryManagementApplication({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
