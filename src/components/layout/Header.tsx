import HeaderButton from "../buttons/HeaderButton";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="py-3 border-b-[1px] border-[var(--color-light-gray)]">
      <div className="flex flex-row justify-between items-center max-w-[90vw] mx-auto">
        <img
          src="/assets/logo.svg"
          alt="teste de imagem"
          className="cursor-pointer"
          width={114}
          height={25}
        />
        <NavBar className="hidden flex-row sm:flex gap-10" />
        <div className="sm:hidden relative">
          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
