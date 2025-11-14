import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
}

export default function Input({ id, label, ...props }: InputProps) {
	return (
		<div className="flex flex-col w-full">
			<label
				htmlFor={id}
				className="font-source-serif-4 font-light text-[1.1rem] capitalize text-[var(--color-dark-gray)]"
			>
				{label}
			</label>
			<input
				id={id}
				{...props}
				className="outline-none border-b-[1px] text-[var(--color-dark-blue)] border-b-[var(--color-dark-gray)] py-1"
			/>
		</div>
	);
}
