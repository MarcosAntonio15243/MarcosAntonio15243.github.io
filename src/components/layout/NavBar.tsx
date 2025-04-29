export default function NavBar() {
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
    <nav className="font-roboto font-light flex flex-row gap-10">
      {navItems.map((e, index) => {
        return (
          <a
            key={index}
            href={e.link}
            className="hover:text-[var(--color-dark-gray)] hover:underline"
          >
            {e.value}
          </a>
        );
      })}
    </nav>
  );
}
