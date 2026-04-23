import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Event Management Application",
  category: "Event & Planning System",
  heroImg: "/aui.png", 
  tagline:
    "A comprehensive platform for planning, organizing, and managing events with seamless scheduling, ticketing, and attendee experience.",
  year: "2025",
  stack: [
    "React",
    "JavaScript",
    "SQL",
    "Front-End Development",
    "Back-End Development",
    "PHP",
  ],
  role: "Event Manager",
  features: [
    "Event scheduling and calendar management.",
    "Attendee registration and user management.",
    "Integrated ticketing system for paid and free events.",
    "Venue management and event logistics tracking.",
    "Real-time updates and notifications for attendees.",
    "Dashboard for monitoring event performance and participation.",
    "Responsive interface for both organizers and attendees.",
  ],
  impact: [
    "Simplifies event planning and coordination processes.",
    "Enhances attendee experience through smooth registration and updates.",
    "Improves organization efficiency with centralized management tools.",
    "Supports various event types including conferences, workshops, and corporate events.",
  ],
  links: {
    repo: "https://github.com/otm-ane0",
  },
};

export default function EventManagementApplication({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
