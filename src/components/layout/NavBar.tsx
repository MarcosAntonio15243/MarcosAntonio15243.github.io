import { HTMLAttributes } from "react";

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function NavBar({ className = "", ...props }: NavBarProps) {
  const navItems = [
    {
      value: "About",
      link: "#about",
    },
    {
      value: "Experience",
      link: "#experience",
    },
    {
      value: "Project",
      link: "#project",
    },
    {
      value: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className={`font-roboto font-light flex ${className}`} {...props}>
      {navItems.map((e, index) => {
        return (
          <a
            key={index}
            href={e.link}
            className="hover:text-[var(--color-dark-gray)] hover:underline outline-none"
          >
            {e.value}
          </a>
        );
      })}
    </nav>
  );
}
