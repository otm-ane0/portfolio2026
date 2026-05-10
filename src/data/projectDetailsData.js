// Consolidated project detail data
// This file exports a map of project data objects used by ProjectCaseLayout
// and other parts of the app. Keep this file free of JSX so it can be
// safely imported by lightweight bundles (chat, ai context, etc.).

export const PROJECT_DETAILS_DATA = {
  educationQuestionPlatform: {
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
  },

  eventManagementApplication: {
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
  },

  examPreparationPlatform: {
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
    notes:
      "Access Restricted: This website is only accessible using Udinus student email (@mhs.dinus.ac.id).",
  },

  ikNettoyageRedesign: {
    title: "IK Nettoyage — Cleaning Services Website Redesign",
    category: "Front-End Development / UI & UX Design",
    heroImg: "/nett.png",
    tagline:
      "Redesigned and developed a modern, responsive website for a cleaning services company to improve online presence, build trust, and increase lead generation.",
    year: "2025",
    stack: ["React", "Tailwind", "Vue.js", "css"],
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
  },

  fashionEcommercePlatform: {
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
      live: "https://fashion-ecommerce-six.vercel.app/",
      repo: "https://github.com/otm-ane0/fashion-ecommerce",
    },
  },

  inventoryManagementApplication: {
    title: "Inventory Management Application",
    category: "Business Management System",
    heroImg: "/ima.png",
    tagline:
      "A smart inventory management system for tracking stock, managing orders, and optimizing business operations in real time.",
    year: "2025",
    stack: ["React", "JavaScript", "SQL", "Front-End Development", "Back-End Development"],
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
  },

  salesProfitDeliveryDashboard: {
    title: "Sales, Profit & Delivery Dashboard",
    category: "Full-Stack Development",
    heroImg: "/dash.png",
    tagline: "Full-Stack Laravel Developer (Dashboard & Business Logic).",
    year: "2025",
    stack: ["laravel", "ReactJS", "TailwindCSS", "MySQL", "REST API"],
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
  },

  dawnShopifyWebsite: {
    title: "Dawn Shopify WebSite",
    category: "full-Stack Development",
    heroImg: "/h2o2.png",
    tagline:
      "A modern web platform designed to provide a fast, responsive, and interactive user experience with clean UI, smooth navigation, and optimized performance for showcasing digital projects and creative content.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Gsap", "Tailwind CSS"],
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
  },
};

