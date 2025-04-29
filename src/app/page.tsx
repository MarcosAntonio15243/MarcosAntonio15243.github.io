import Header from "@/components/layout/Header";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="mx-6 max-w-3xl flex flex-col gap-10 py-10">
          <section className="flex flex-col gap-4">
            <img src="/assets/profile.webp" alt="Profile Image" className="h-20 w-20 rounded-full"/>
            <h1 className="flex flex-col">Marcos Antonio <span className="text-[var(--color-dark-gray)]">Full-Stack Developer</span></h1>
            <p>
              I am a full stack developer dedicated to building complete solutions, combining the development of modern, functional interfaces with the implementation of robust back-end architectures. I am committed to technical excellence, continuous improvement, and delivering projects that drive value and innovation for clients and partners.
            </p>
          </section>
          <hr />
          <div>
            <span>
              <IoLocationOutline /> Campina Grande, Paraíba, Brasil
            </span>
            <a href="https://drive.google.com/file/d/1bdcbdjJdf5UdUBGVc3DPXeUWwqCL0DS-/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
          </div>
        </div>
      </main>
    </div>
  );
}
