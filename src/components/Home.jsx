import TypewriterComponent from "typewriter-effect";
import { Socials } from "../components";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  return (
    <article
      className="flex h-screen flex-col items-center justify-end text-white md:justify-center"
      id="home"
    >
      <h1 className="mb-4 text-4xl font-medium md:mb-6 md:mt-32 md:text-5xl">
        <TypewriterComponent
          options={{
            strings: ["Jenish Adhikari"],
            delay: 100,
            deleteSpeed: Infinity,
            autoStart: true,
            cursor: "_",
          }}
        />
      </h1>
      <span className="mb-4 text-4xl">🇳🇵</span>
      <h2 className="mb-6 px-4 text-center text-xl text-gray-400 md:text-2xl">
        Computer Science + Full Stack Web Development
      </h2>
      <div className="mb-10 flex items-center gap-5 text-2xl md:mb-5">
        <Socials />
      </div>
      <button className="rounded-full border border-solid border-sky-400 px-3 py-2 text-xs font-semibold text-cyan-400 hover:bg-cyan-400/10 md:text-sm">
        Resume <MdArrowOutward className="md:text-md inline text-sm" />
      </button>
      <div className="my-24 md:my-10">
        <IoIosArrowDown className="duration-400 animate-ping text-4xl text-cyan-400/70 delay-100" />
        <IoIosArrowDown className="duration-400 animate-ping text-4xl text-cyan-400/70 delay-300" />
        <IoIosArrowDown className="duration-400 animate-ping text-4xl text-cyan-400/70 delay-700" />
      </div>
    </article>
  );
}

export default Home;
