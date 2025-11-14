import type { HTMLAttributes } from "react";

interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
	srcImg: string;
	altImg?: string;
	jobTitle: string;
	enterprise: string;
	dateStart: string;
	dateEnd: string;
	description: string;
}

export default function ExperienceCard({
	srcImg,
	altImg = "Enterprise Logo",
	jobTitle,
	enterprise,
	dateStart,
	dateEnd,
	description,
	...props
}: ExperienceCardProps) {
	return (
		<div className="flex flex-col gap-2" {...props}>
			<div className="w-full flex flex-col md:flex-row justify-between">
				<div className="flex flex-row gap-2">
					<img src={srcImg} alt={altImg} className="h-11 w-11 rounded-full" />
					<div className="font-roboto flex flex-col gap-0 text-[1.1rem]">
						<span className="font-semibold">{jobTitle}</span>
						<span className="font-thin max-sm:text-sm max-sm:tracking-[0.03rem]">
							{enterprise}
						</span>
					</div>
				</div>
				<span className="font-source-serif-4 font-light max-md:ml-13 text-nowrap text-base text-[var(--color-dark-gray)]">
					{dateStart} - {dateEnd || "Present"}
				</span>
			</div>
			<p className="sm:ml-13">{description}</p>
		</div>
	);
}
