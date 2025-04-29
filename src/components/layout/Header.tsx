

export default function Header() {
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
    }
  ];
    
  return (
    <header className="py-3 border-b-[1px] border-[var(--color-light-gray)]">
      <div className="flex flex-row justify-between items-center max-w-[90vw] mx-auto">
        <img src="/assets/logo.svg" alt="teste de imagem" className="cursor-pointer" />
        <nav className="font-roboto font-light flex flex-row gap-10">
          {navItems.map((e, index) => {
            return (
              <a key={index} href={e.link} className="hover:text-[var(--color-dark-gray)] hover:underline">{e.value}</a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}