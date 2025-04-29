import { HTMLAttributes } from "react";

interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
  srcImg: string;
  altImg?: string;
  jobTitle: string;
  enterprise: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export default function ExperienceCard({ srcImg, altImg="Enterprise Logo", jobTitle, enterprise, dateStart, dateEnd, description, ...props }: ExperienceCardProps) {
  return (
    <div {...props}>
      <img src={srcImg} alt={altImg} className="h-10 w-10 rounded-full"/>
      <div>
        <div>
          <div>
            <span>{jobTitle}</span>
            <span>{enterprise}</span>
          </div>
          <p>{dateStart} - {dateEnd || "Present"}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}