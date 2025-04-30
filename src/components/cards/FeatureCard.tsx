import { HTMLAttributes } from "react";
import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

interface FeatureCardProps extends HTMLAttributes<HTMLElement> {
  srcImg: string;
  altImg?: string;
  featureTitle: string;
  description: string;
  tecnologies: string[];
  repositoryLink: string;
  reverse?: boolean;
}

export default function FeatureCard({
  srcImg,
  altImg = "Feature Preview",
  featureTitle,
  description,
  tecnologies,
  repositoryLink,
  reverse=false,
  ...props
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:flex-row md:items-center gap-6`} {...props}>
      <img
        src={srcImg}
        alt={altImg}
        className="max-w-[22rem] h-[16rem] object-cover object-top mx-auto rounded-xl shadow-lg"
      />
      <div className={`flex flex-col text-center ${reverse ? "md:text-right" : "md:text-left"} gap-2`}>
        <h3>{featureTitle}</h3>
        <p>{description}</p>
        <hr className="text-[var(--color-light-gray)]" />
        <div className={`flex flex-col gap-2 justify-center items-center ${reverse ? "md:items-end" : "md:items-start"}`}>
          <div className="font-roboto font-thin flex flex-row w-fit gap-5">
            {tecnologies.map((e, index) => {
              return <span key={index}>{e}</span>;
            })}
          </div>
          <a
            href={repositoryLink}
            className="max-md:mx-auto flex flex-row gap-1 text-xl hover:text-[var(--color-dark-gray)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
            <LuSquareArrowOutUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
