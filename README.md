# Muhammad Hussain Raza — Developer Portfolio

A modern, responsive, and accessible personal portfolio for a software developer. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

> ✨ Replace the placeholder content (name, projects, links, resume) with your own — every piece of content lives in editable data files.

---

## ✨ Features

- **Dark / light theme** toggle (defaults to dark, remembers your choice, no flash on load)
- **Sticky navbar** with active-section highlighting and a responsive mobile menu
- **Animated hero** with a typewriter role effect and floating tech chips
- **Animated stat counters** and scroll-reveal animations throughout
- **Glassmorphism cards**, soft shadows and subtle gradient backgrounds
- **Projects** with category filtering (All / Frontend / Full Stack / Backend / Mobile)
- **Experience & Education** vertical timeline with type filtering
- **Services**, **About**, and a **working contact form** with validation + loading/success/error states
- **Custom 404 page**, **preloader**, **back-to-top**, lazy-loaded images, smooth scrolling
- **SEO** meta tags, Open Graph, semantic & keyboard-accessible HTML, reduced-motion support
- Fully **responsive** (mobile / tablet / desktop)

---

## 🧱 Tech Stack

| Area        | Tool                                   |
| ----------- | -------------------------------------- |
| Framework   | React 19 + TypeScript                  |
| Build tool  | Vite 7                                 |
| Styling     | Tailwind CSS v4                        |
| Animation   | Framer Motion                          |
| Icons       | lucide-react + react-icons             |

---

## 📁 Folder Structure

```
portfolio/
├── index.html                 # SEO meta, fonts, theme-no-flash script
├── public/                    # Static assets (drop your real resume.pdf here)
├── src/
│   ├── assets/                # Bundled images (avatar) — inlined at build
│   │   └── avatar.png
│   ├── components/            # All UI sections + reusable pieces
│   │   ├── AnimatedBackground.tsx
│   │   ├── Preloader.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TypingText.tsx
│   │   ├── About.tsx
│   │   ├── StatCard.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Experience.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── NotFound.tsx
│   ├── context/
│   │   └── ThemeContext.tsx   # Theme provider + useTheme hook
│   ├── data/                  # 👈 ALL portfolio content lives here
│   │   ├── personal.ts
│   │   ├── socials.ts
│   │   ├── nav.ts
│   │   ├── stats.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── services.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useCountUp.ts
│   ├── utils/
│   │   ├── cn.ts              # className helper
│   │   ├── motion.tsx         # Animation variants + <Reveal/>
│   │   └── downloadResume.ts  # Placeholder resume download
│   ├── App.tsx                # Page composition + 404 handling
│   ├── main.tsx               # React entry
│   └── index.css             # Tailwind theme tokens + design system
└── vite.config.ts
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs a single dist/index.html)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🐳 Docker & Containerization

You can run the portfolio inside a lightweight, production-ready Docker container (Nginx Alpine) with multi-stage build and health check support.

### Option 1: Docker Compose (Recommended)
```bash
# Build and start in detached mode (http://localhost:8080)
docker compose up -d --build

# View container logs
docker compose logs -f

# Stop the container
docker compose down
```

Or using npm shortcuts:
```bash
npm run docker:up
npm run docker:down
```

### Option 2: Docker CLI
```bash
# Build the Docker image
docker build -t portfolio-app .

# Run the container on port 8080
docker run -d -p 8080:80 --name portfolio-app portfolio-app

# Stop and remove container
docker stop portfolio-app && docker rm portfolio-app
```


---

## 🛠️ Customization

All content is in `src/data/`. Search for `CUSTOMIZE` / `PLACEHOLDER` comments.

| What                      | Where                                     |
| ------------------------- | ----------------------------------------- |
| Name, title, bio, contact | `src/data/personal.ts`                    |
| Social links              | `src/data/socials.ts`                     |
| Skills & levels           | `src/data/skills.ts`                      |
| Projects                  | `src/data/projects.ts`                    |
| Experience & education    | `src/data/experience.ts`                  |
| Services                  | `src/data/services.ts`                    |
| Stats                     | `src/data/stats.ts`                       |
| Nav links                 | `src/data/nav.ts`                         |
| Theme colors & fonts      | `src/index.css` (`:root` / `.dark` tokens)|
| Avatar image              | `src/assets/avatar.png`                   |

### Resume
The **Download Resume** button generates a placeholder text file via `src/utils/downloadResume.ts`.
To use your real PDF, drop `resume.pdf` in `public/` and follow the instructions in that file.

### Contact form
`src/components/Contact.tsx` ships with a placeholder `sendContactMessage()`.
Wire it to **EmailJS**, **Formspree**, or your own backend — examples are in the comments.

---

## 🌐 Deployment
The production build is a **single self-contained `index.html`** (`vite-plugin-singlefile`),
so you can host it anywhere static: Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.

---

Built with ❤️ using React, Vite & Tailwind CSS.
