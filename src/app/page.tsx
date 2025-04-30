import ExperienceCard from "@/components/cards/ExperienceCard";
import FeatureCard from "@/components/cards/FeatureCard";
import Input from "@/components/inputs/Input";
import Textarea from "@/components/inputs/Textarea";
import Header from "@/components/layout/Header";
import Divider from "@/components/ui/Divider";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
  const experiences = [
    {
      srcImg: "/assets/enterprise1Logo.webp",
      altImg: "Municipal Government of Junco do Serido Logo",
      jobTitle: "Front-End Developer",
      enterprise: "Municipal Government of Junco do Seridó (Paraíba, Brazil)",
      dateStart: "Aug 2021",
      dateEnd: "Oct 2021",
      description:
        "I developed a responsive institutional website using HTML5, CSS3, and JavaScript. I worked on designing and structuring web pages to ensure a clean, user-friendly experience across different devices. In addition, I collaborated with the internal team to gather requirements and transform them into functional solutions.",
    },
    {
      srcImg: "/assets/enterprise2Logo.webp",
      altImg: "CODEX Logo",
      jobTitle: "Front-End Developer and Scrum Master",
      enterprise: "CODEX Junior Enterprise (Campina Grande, Paraíba, Brazil)",
      dateStart: "Nov 2022",
      dateEnd: "Jul 2023",
      description:
        "I developed web applications with React.js, TypeScript, Axios, HTML5, and CSS3, building reusable components and implementing state management solutions. As Scrum Master, I led agile ceremonies and helped improve team workflows, while also participating in code reviews and technical planning.",
    },
  ];

  const features = [
    {
      srcImg: "/assets/feature1.webp",
      altImg: "Traunship Landing Page Preview",
      featureTitle: "Traunship Landing Page",
      description:
        "This project is an implementation of the Traunship 🚀 | Product Landing Page – Community design, originally created in Figma under the Creative Commons BY 4.0 license. The page was developed using Next.js and Tailwind CSS.",
      tecnologies: ["HTML", "CSS", "JS", "TS", "React.Js", "NextJs"],
      repositoryLink:
        "https://github.com/MarcosAntonio15243/Traunship-Landing-Page",
    },
    {
      srcImg: "/assets/feature2.webp",
      altImg: "Simple Horizontal Portfolio Preview",
      featureTitle: "Simple Horizontal Portfolio",
      description:
        "This project is an implementation of a simple horizontal portfolio with four sections, developed using HTML, CSS, and JavaScript.",
      tecnologies: ["HTML", "CSS", "JS"],
      repositoryLink:
        "https://github.com/MarcosAntonio15243/Portfolio-Horizontal-Simples",
    },
  ];

  return (
    <div className="">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="mx-6 max-w-3xl flex flex-col gap-10 py-10">
          {/* Presentation Section */}
          <section className="flex flex-col gap-4">
            <img
              src="/assets/profile.webp"
              alt="Profile Image"
              className="ounded-full"
              height={80}
              width={80}
            />
            <h1 className="flex flex-col">
              Marcos Antonio{" "}
              <span className="text-[var(--color-dark-gray)]">
                Full-Stack Developer
              </span>
            </h1>
            <p>
              I am a full stack developer dedicated to building complete
              solutions, combining the development of modern, functional
              interfaces with the implementation of robust back-end
              architectures. I am committed to technical excellence, continuous
              improvement, and delivering projects that drive value and
              innovation for clients and partners.
            </p>
          </section>

          {/* Localization and CV */}
          <div className="flex flex-row justify-between items-center max-sm:text-sm text-[var(--color-dark-gray)] border-y-[1px] py-3 px-2 border-[var(--color-light-gray)]">
            <div className="flex flex-row items-center gap-1">
              <IoLocationOutline className="sm:text-xl" /> Campina Grande,
              Paraiba, Brasil
            </div>
            <a
              href="https://drive.google.com/file/d/1bdcbdjJdf5UdUBGVc3DPXeUWwqCL0DS-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              CV
            </a>
          </div>

          {/* About Me Section */}
          <section id="about" className="flex flex-col gap-4">
            <h2>About Me</h2>
            <p>
              I started my journey in development in 2019 when I joined the
              technical course in Informatics at IFPB – Santa Luzia (PB). That’s
              where I had my first contact with web development, working with
              HTML5, CSS3, and JavaScript. Since then, I’ve been continuously
              building my skills, with a strong focus on modern frameworks,
              especially React.js, which has been my main development tool ever
              since.
            </p>
            <p>
              Over the years, I’ve deepened my knowledge of the React ecosystem,
              working with technologies like TypeScript, Styled Components,
              Axios, and Next.js, as well as databases like PostgreSQL. I also
              gained experience testing APIs with Postman and exploring Oracle
              APEX, which helped me broaden my understanding of web development
              and system integration.
            </p>
            <p>
              I'm passionate about learning, delivering clean and efficient
              code, and creating great user experiences. I believe my hands-on
              experience, adaptability, and results-driven mindset can bring
              value to any team — especially when it comes to building
              responsive interfaces and integrating systems seamlessly.
            </p>
            <p>
              I'm excited to take on new challenges, collaborate with passionate
              teams, and keep growing both personally and professionally.
            </p>
          </section>

          <Divider />

          {/* My Experience Section */}
          <section id="experience" className="flex flex-col gap-5">
            <h2>My Experience</h2>
            <div className="flex flex-col gap-8 my-5">
              {experiences.map((e, index) => {
                return (
                  <ExperienceCard
                    key={index}
                    srcImg={e.srcImg}
                    jobTitle={e.jobTitle}
                    enterprise={e.enterprise}
                    dateStart={e.dateStart}
                    dateEnd={e.dateEnd}
                    description={e.description}
                  />
                );
              })}
            </div>
          </section>

          <Divider />

          {/* Features Section */}
          <section id="project" className="flex flex-col gap-5">
            <h2>Featured Project</h2>
            <div className="flex flex-col gap-8 my-5">
              {features.map((e, index) => {
                return (
                  <FeatureCard
                    key={index}
                    srcImg={e.srcImg}
                    featureTitle={e.featureTitle}
                    description={e.description}
                    tecnologies={e.tecnologies}
                    repositoryLink={e.repositoryLink}
                    reverse={index % 2 != 0}
                  />
                );
              })}
            </div>
          </section>

          <Divider />

          <section id="contact" className="flex flex-col gap-5">
            <h2>Contact Me</h2>
            <p>
              Have an opportunity or a project in mind? feel free to get in
              touch.
            </p>
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-5">
                  <Input id={"name"} label={"Your Name"} type="text" autoComplete="off" />
                  <Input
                    id={"email"}
                    label={"Your Email"}
                    type="email"
                    autoComplete="on"
                  />
                </div>
                <Textarea id={"message"} label={"Message"} />
                <input
                  type="submit"
                  value="Send Message"
                  className="font-roboto font-light text-white bg-[var(--color-dark-blue)] hover:bg-[var(--color-dark-gray)] self-center px-4 py-1.5 cursor-pointer"
                />
              </div>
            </form>
          </section>

          {/* Footer */}
          <footer>
            <div className="flex flex-col gap-2 my-5 items-center text-[var(--color-dark-blue)]">
              <div className="flex flex-row items-center gap-2">
                <a
                  href="https://github.com/MarcosAntonio15243"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="text-xl hover:text-[var(--color-dark-gray)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos-antonio-18059b234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin className="text-2xl hover:text-[var(--color-dark-gray)]" />
                </a>
              </div>
              <span>Marcos Antonio - 2025</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
