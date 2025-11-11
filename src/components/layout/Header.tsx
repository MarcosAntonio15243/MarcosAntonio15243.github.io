import HeaderButton from "../buttons/HeaderButton";
import NavBar from "./NavBar";

export default function Header() {
	return (
		<header className="fixed w-full bg-white py-3 border-b-[1px] border-[var(--color-light-gray)] shadow-xs">
			<div className="flex flex-row justify-between items-center max-w-[90vw] mx-auto">
				<a href="#home" aria-label="Link to Start of Portfólio">
					<img
						src="/assets/logo.svg"
						alt="Image showing the name Marcos"
						width={114}
						height={25}
					/>
				</a>
				<NavBar className="hidden flex-row sm:flex gap-10" />
				<div className="sm:hidden relative">
					<HeaderButton />
				</div>
			</div>
		</header>
	);
}
