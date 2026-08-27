export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

/**
 * 👇 Animated statistics shown in the About section.
 *    `value` counts up when scrolled into view.
 */
export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Technologies Used" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Happy Clients" },
];
