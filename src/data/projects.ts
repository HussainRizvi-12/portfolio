export type ProjectCategory = "Frontend" | "Full Stack" | "Backend" | "Mobile";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  year: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
}

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Full Stack",
  "Backend",
  "Mobile",
];

/**
 * 👇 Placeholder projects. Swap the `image`, links and copy with your own.
 *    Images are loaded lazily from remote URLs (swap for your screenshots).
 */
export const projects: Project[] = [
  {
    id: "shopwave",
    title: "ShopWave — E-Commerce Platform",
    category: "Full Stack",
    featured: true,
    year: "2024",
    description:
      "A full-featured online store with cart, Stripe checkout, admin dashboard and real-time inventory.",
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=900",
    features: ["Stripe payments", "Admin analytics", "JWT auth & roles"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/your-username/shopwave",
    demo: "https://shopwave.example.com",
  },
  {
    id: "taskflow",
    title: "TaskFlow — Project Management",
    category: "Full Stack",
    year: "2024",
    description:
      "Kanban-style task manager with drag-and-drop boards, teams and real-time collaboration.",
    image:
      "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=900",
    features: ["Drag & drop boards", "Team workspaces", "Live updates"],
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/your-username/taskflow",
    demo: "https://taskflow.example.com",
  },
  {
    id: "devconnect",
    title: "DevConnect — Developer Network",
    category: "Full Stack",
    year: "2023",
    description:
      "A social platform for developers to share posts, follow peers and showcase projects.",
    image:
      "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&w=900",
    features: ["Feed & profiles", "Notifications", "REST API"],
    tech: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/your-username/devconnect",
    demo: "https://devconnect.example.com",
  },
  {
    id: "weathernow",
    title: "WeatherNow — Forecast Dashboard",
    category: "Frontend",
    year: "2023",
    description:
      "A responsive weather app with location search, hourly forecasts and animated conditions.",
    image:
      "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=900",
    features: ["Geo search", "Hourly charts", "PWA installable"],
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/your-username/weathernow",
    demo: "https://weathernow.example.com",
  },
  {
    id: "snippetvault",
    title: "SnippetVault — Code Snippet API",
    category: "Backend",
    year: "2023",
    description:
      "A REST API for storing, tagging and searching code snippets with rate limiting and docs.",
    image:
      "https://images.pexels.com/photos/34803990/pexels-photo-34803990.jpeg?auto=compress&cs=tinysrgb&w=900",
    features: ["REST + Swagger docs", "Rate limiting", "Token auth"],
    tech: ["Node.js", "Express", "MySQL", "Redis"],
    github: "https://github.com/your-username/snippetvault",
    demo: "https://snippetvault.example.com",
  },
  {
    id: "fittrack",
    title: "FitTrack — Fitness & Habit Tracker",
    category: "Mobile",
    year: "2022",
    description:
      "A cross-platform mobile app to log workouts, build habits and visualize progress.",
    image:
      "https://images.pexels.com/photos/12882853/pexels-photo-12882853.png?auto=compress&cs=tinysrgb&w=900",
    features: ["Workout logging", "Habit streaks", "Offline sync"],
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/your-username/fittrack",
    demo: "https://fittrack.example.com",
  },
];
