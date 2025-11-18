import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
	srcImg: string;
	altImg?: string;
	projectTitle: string;
	description: string;
	tecnologies: string[];
	repositoryLink: string;
}

export function ProjectCard({
	srcImg,
	altImg = "Featured Project Preview",
	projectTitle,
	description,
	tecnologies,
	repositoryLink,
	...props
}: ProjectCardProps) {
	return (
		<div
			className="flex flex-col md:flex-row-reverse gap-4 bg-[var(--color-bg-card)] px-4 py-6 md:p-4 md:pr-0 md:pb-0 border-[1px] border-[var(--color-bg-image)] md:border-l-4 md:border-l-[var(--color-border-card)]"
			{...props}
		>
			<Image
				src={srcImg}
				alt={altImg}
				className="object-cover w-full sm:min-w-[300px] sm:max-w-[400px] md:w-[300px] object-top mx-auto max-md:rounded-xl rounded-tl-xl max-md:shadow-[0_2px_4px_rgba(0,0,0,0.25)] border-l-[1px] border-t-[1px] border-[var(--color-bg-image)]"
				width={600}
				height={480}
			/>
			<div className="flex flex-col gap-2 py-4 items-center text-center md:items-baseline md:text-left">
				<div className="font-roboto text-sm text-[var(--color-text-secondary)] font-thin flex flex-row max-md:justify-center flex-wrap w-fit gap-x-5 gap-y-1">
					{tecnologies.map((e, index) => {
						return <span key={`${index}-${e}`}>{e}</span>;
					})}
				</div>
				<h3 className="max-md:my-2">{projectTitle}</h3>
				<p className="text-sm md:text-base">{description}</p>
				<div className="flex flex-col gap-2 justify-center items-center md:items-start">
					<a
						href={repositoryLink}
						className=""
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Link to repository at project in GitHub"
					>
						<span className="font-roboto underline underline-offset-4 gap-1 flex flex-row items-center text-sm font-medium text-[var(--color-link)] hover:text-[var(--color-gray-600)]">
							See more
							<FiGithub />
							<ArrowUpRight className="size-4" />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
