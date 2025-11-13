"use client";

import Image from "next/image";
import HeaderButton from "../buttons/HeaderButton";
import NavBar from "./NavBar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const logoSrc = theme === "light" ? "logo-dark.svg" : "logo-light.svg";

	return (
		<header className="fixed w-full bg-[var(--color-bg-body)] py-3 border-b-[1px] flex justify-center">
			<div className="flex flex-row justify-between items-center w-full max-content-w">
				<a href="#home" aria-label="Link to Start of Portfólio">
					{mounted && (
						<Image
							src={`/assets/${logoSrc}`}
							alt="Image showing the name Marcos"
							width={80}
							height={25}
						/>
					)}
				</a>
				<NavBar className="hidden flex-row sm:flex gap-10" />
				<div className="sm:hidden relative">
					<HeaderButton />
				</div>
			</div>
		</header>
	);
}
