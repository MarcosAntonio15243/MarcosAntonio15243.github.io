import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="py-3 border-b-[1px] border-[var(--color-light-gray)]">
      <div className="flex flex-row justify-between items-center max-w-[90vw] mx-auto">
        <img src="/assets/logo.svg" alt="teste de imagem" className="cursor-pointer" />
        <NavBar />
      </div>
    </header>
  )
}