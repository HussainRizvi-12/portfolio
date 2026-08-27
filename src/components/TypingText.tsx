import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
}

/**
 * Classic type → pause → delete → next-word effect.
 */
export function TypingText({ words, className }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    // variable timing for a natural feel
    let delay = deleting ? 45 : 95;
    if (!deleting && text === current) delay = 1500; // hold full word
    if (deleting && text === "") delay = 350; // tiny pause before next

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-brand-2 align-middle" />
    </span>
  );
}
