import ExperienceCard from "@/components/cards/ExperienceCard";
import FeatureCard from "@/components/cards/FeatureCard";
import Header from "@/components/layout/Header";
import Divider from "@/components/ui/Divider";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";

import { experiences } from "@/components/data/experience";
import { features } from "@/components/data/feature";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-12 flex flex-col justify-center items-center">
        <div id="home" className="mx-6 max-w-3xl flex flex-col gap-10 py-10">
          {/* Presentation Section */}
          <section className="flex flex-col gap-4">
            <img
              src="/assets/profile.webp"
              alt="Profile photo of Marcos Antonio"
              height={100}
              width={100}
              className="rounded-full"
            />
            <div className="flex flex-col gap-0">
              <h1>Marcos Antonio</h1>
              <h2 className="text-[var(--color-dark-gray)]">
                Full-Stack Developer
              </h2>
            </div>
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
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center text-[var(--color-dark-gray)] border-y-[1px] py-3 px-2 border-[var(--color-light-gray)]">
            <div className="flex flex-row items-center gap-1">
              <IoLocationOutline className="sm:text-xl" /> Campina Grande,
              Paraiba, Brazil
            </div>
            <a
              href="https://drive.google.com/file/d/1ZJId7DFc2nv3xRmkMtM1jL5_O-blAQ2L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Curriculum Vitae of Marcos"
              className="font-roboto font-medium hover:underline"
            >
              <span className="flex items-center gap-1 sm:flex-row-reverse flex-row">
                <IoDocumentTextOutline size={20} />
                <span className="capitalize">Curriculum Vitae</span>
              </span>
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
            <a
              href="https://github.com/MarcosAntonio15243?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to github repositories of Marcos"
              className="font-roboto font-light self-center px-4 py-1.5 cursor-pointer hover:text-[var(--color-dark-gray)] underline underline-offset-2"
            >
              <span className="flex flex-row items-center gap-1">
                <span>See other projects on my github</span>
                <FiGithub />
                <LuSquareArrowOutUpRight />
              </span>
            </a>
          </section>

          <Divider />

          <section id="contact" className="flex flex-col gap-5">
            <h2>Contact Me</h2>
            <p>
              Have an opportunity or a project in mind? feel free to get in
              touch.
            </p>
            <a
              href="mailto:marcos.antonio.developer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email to Marcos"
              className="font-roboto font-light text-white bg-[var(--color-dark-blue)] hover:bg-[var(--color-dark-gray)] self-center px-4 py-1.5 cursor-pointer"
            >
              Write Message
            </a>
          </section>

          {/* Footer */}
          <footer>
            <div className="flex flex-col gap-2 my-5 items-center text-[var(--color-dark-blue)]">
              <div className="flex flex-row items-center gap-2">
                <a
                  href="https://github.com/MarcosAntonio15243"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to github profile"
                >
                  <FiGithub className="text-xl hover:text-[var(--color-dark-gray)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos-antonio-18059b234"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to linkedin profile"
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
