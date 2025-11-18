import { Monitor } from "lucide-react";
import type { HTMLAttributes } from "react";

interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
	jobTitle: string;
	enterprise: string;
	dateStart: string;
	dateEnd: string | null;
	description: string;
}

export function ExperienceCard({
	jobTitle,
	enterprise,
	dateStart,
	dateEnd,
	description,
	...props
}: ExperienceCardProps) {
	return (
		<div
			className="flex flex-col gap-2 bg-[var(--color-bg-card)] p-4 border-[1px] border-[var(--color-bg-image)] md:border-l-4 md:border-l-[var(--color-border-card)]"
			{...props}
		>
			<div className="w-full flex flex-col md:flex-row justify-between">
				<div className="flex flex-row gap-4">
					<div className="flex items-center justify-center border-2 border-[var(--color-gray-400)] rounded-full h-10 min-w-10">
						<Monitor className="size-5 text-[var(--color-icon)]" />
					</div>
					<div className="font-roboto flex flex-col gap-1 text-[1.1rem]">
						<span className="font-light text-nowrap text-sm text-[var(--color-gray-600)]">
							{dateStart} - {dateEnd || "Present"}
						</span>
						<h3 className="">{jobTitle}</h3>
						<span className="text-sm sm:text-base max-sm:tracking-[0.03rem] text-[var(--color-text-secondary)]">
							{enterprise}
						</span>
						<p className="text-[var(--color-text-primary)] text-sm md:text-base md:leading-snug">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
