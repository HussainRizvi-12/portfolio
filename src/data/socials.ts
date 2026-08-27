import type { ComponentType } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Mail } from "lucide-react";
import { personal } from "./personal";

export interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

/**
 * 👇 Replace the URLs below with your own profile links.
 */
export const socials: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedinIn },
  { name: "X (Twitter)", href: "https://twitter.com/your-handle", icon: FaXTwitter },
  { name: "Instagram", href: "https://instagram.com/your-handle", icon: FaInstagram },
  { name: "LeetCode", href: "https://leetcode.com/your-username", icon: SiLeetcode },
];

/** Email is rendered separately because it uses the configured address. */
export const emailLink: SocialLink = {
  name: "Email",
  href: `mailto:${personal.email}`,
  icon: Mail,
};
