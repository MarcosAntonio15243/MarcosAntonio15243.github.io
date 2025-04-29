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
          <div className="flex flex-row justify-between items-center text-[var(--color-dark-gray)] border-y-[1px] py-3 px-2 border-[var(--color-light-gray)]">
            <div className="flex flex-row items-center gap-1">
              <IoLocationOutline className="text-xl" /> Campina Grande, Paraíba, Brasil
            </div>
            <a href="https://drive.google.com/file/d/1bdcbdjJdf5UdUBGVc3DPXeUWwqCL0DS-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">CV</a>
          </div>
        </div>
      </main>
    </div>
  );
}
