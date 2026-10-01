import preethizign from "../assets/projects/preethizign.png";
import jobTracker from "../assets/projects/job-tracker.png";
import weddingInvitation from "../assets/projects/wedding-invitation.png";
import adminDashboard from "../assets/projects/admin-dashboard.png";
import movieExplorer from "../assets/projects/movie-explorer.png";
import miniEcommerce from "../assets/projects/mini-ecommerce.png";
import headphoneLanding from "../assets/projects/headphone-landing.png";

const projects = [
  {
    title: "PreethiZign",
    description:
      "Responsive handmade products ecommerce platform featuring authentication, product management, responsive layouts, and business-focused user experience.",
    tech: ["React", "Firebase", "Firestore", "Cloudinary", "Tailwind CSS"],
    image: preethizign,
    live: "https://preethizign.netlify.app/",
    github: "https://github.com/Anandh25/preethizign",
    featured: true,
  },

  {
    title: "Job Tracker",
    description:
      "Full-stack job tracking application with JWT authentication, CRUD operations, search, filtering, server-side pagination, and responsive UI.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: jobTracker,
    live: "https://job-tracker-2-0-typescript.vercel.app/",
    github: "https://github.com/Anandh25/job-tracker-2.0-Typescript-",
    featured: true,
  },

  {
    title: "Wedding Invitation",
    description:
      "Modern wedding invitation website featuring event schedules, ceremony details, gallery sections, and responsive design.",
    tech: ["React", "JavaScript", "CSS"],
    image: weddingInvitation,
    live: "https://myks-invitation.netlify.app/",
    github: "https://github.com/Anandh25/myks-invitation",
    featured: false,
  },

  {
    title: "Admin Dashboard",
    description:
      "Interactive admin dashboard with analytics cards, charts, responsive layouts, and modern UI components.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: adminDashboard,
    live: "https://anandh-admin-dashboard.netlify.app/",
    github: "https://github.com/Anandh25/admin-dashboard-frontend",
    featured: false,
  },

  {
    title: "Movie Explorer",
    description:
      "Movie discovery application using external APIs with search, filtering, and responsive user experience.",
    tech: ["React", "API Integration", "JavaScript"],
    image: movieExplorer,
    live: "https://anandh-movie-explorer.netlify.app/",
    github: "https://github.com/Anandh25/movie-explorer-react",
    featured: false,
  },

  {
    title: "Mini E-Commerce",
    description:
      "Responsive ecommerce application with product listings, cart functionality, and Firebase integration.",
    tech: ["React", "Firebase", "JavaScript"],
    image: miniEcommerce,
    live: "https://mini-ecommerce-react-henna.vercel.app/",
    github: "https://github.com/Anandh25/mini-ecommerce-react",
    featured: false,
  },

  {
    title: "Headphone Landing Page",
    description:
      "Product-focused landing page featuring modern layouts, animations, responsive design, and conversion-oriented sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: headphoneLanding,
    live: "https://pulsebeat-headphone-landing.netlify.app/",
    github: "https://github.com/Anandh25/pulsebeat-product-page",
    featured: false,
  },
];

export default projects;
