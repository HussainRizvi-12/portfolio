import { personal } from "@/data/personal";

/**
 * 📄 PLACEHOLDER RESUME DOWNLOAD
 * ------------------------------------------------------------------
 * Generates a simple, formatted text resume on the fly so the
 * "Download Resume" button works out of the box on a static deploy.
 *
 * ✅ To use your REAL resume instead:
 *   1. Add `resume.pdf` to the `public/` folder.
 *   2. Replace the body of this function with:
 *
 *      const a = document.createElement("a");
 *      a.href = "/resume.pdf";
 *      a.download = "Your-Resume.pdf";
 *      a.click();
 * ------------------------------------------------------------------
 */
export function downloadResume() {
  const lines = [
    personal.name.toUpperCase(),
    personal.role,
    "",
    `Email     : ${personal.email}`,
    `Phone     : ${personal.phone}`,
    `Location  : ${personal.location}`,
    `Website   : https://your-portfolio-url.com`,
    "",
    "PROFILE",
    personal.intro,
    "",
    "EXPERIENCE",
    "• Full Stack Developer (Freelance) — Self-employed · 2022–Present",
    "• Freelance Web Developer — Upwork · 2021–2022",
    "• Frontend Developer Intern — Brightwave Studio · 2021",
    "",
    "EDUCATION",
    "• B.Sc. in Computer Science — Tech University · 2017–2021",
    "",
    "CERTIFICATIONS",
    "• AWS Certified Cloud Practitioner — 2023",
    "• Meta Front-End Developer (Coursera) — 2022",
    "",
    "SKILLS",
    "React, Node.js, Express, MongoDB, MySQL, JavaScript, Python, Java, C/C++, Git, Docker, AWS",
    "",
    "— Replace this placeholder with your real resume PDF. —",
  ];

  const blob = new Blob([lines.join("\n")], {
    type: "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${personal.resumeName}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
