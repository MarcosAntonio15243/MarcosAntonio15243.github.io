"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NavBar from "../layout/NavBar";

export default function HeaderButton() {
	const [display, setDisplay] = useState("hidden");

	return (
		<>
			<IoMdMenu
				className="text-4xl cursor-pointer p-1 text-[var(--color-text-primary)] hover:text-gray-600"
				onClick={() =>
					setDisplay((d) => (d.includes("hidden") ? "flex" : "hidden"))
				}
			/>
			<div
				className={`absolute ${display} flex-col z-10 right-3 bg-[var(--color-bg-body)] border-[1px] border-[var(--color-border)] p-5 gap-5 rounded-2xl rounded-tr-none shadow-xs`}
			>
				<NavBar
					onClick={() => setDisplay("hidden")}
					className="flex-col gap-5 items-center"
				/>
			</div>
		</>
	);
}
