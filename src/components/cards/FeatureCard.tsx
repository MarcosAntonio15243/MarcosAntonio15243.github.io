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
}

export default function FeatureCard({
  srcImg,
  altImg = "Feature Preview",
  featureTitle,
  description,
  tecnologies,
  repositoryLink,
  ...props
}: FeatureCardProps) {
  return (
    <div {...props}>
      <img src={srcImg} alt={altImg} className="w-1/2 h-72 rounded-full object-cover object-top" />
      <div>
        <h3>{featureTitle}</h3>
        <p>{description}</p>
        <hr className="text-[var(--color-light-gray)]" />
        {tecnologies.map((e, index) => {
          return (
            <span key={index}>{e}</span>
          )
        })}
        <a href={repositoryLink}><FiGithub /><LuSquareArrowOutUpRight /></a>
      </div>
    </div>
  );
}
