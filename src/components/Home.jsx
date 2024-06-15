import TypewriterComponent from "typewriter-effect";
import { Socials } from "../components";
import { MdArrowOutward } from "react-icons/md";

function Home() {
  return (
    <article
      className="flex h-screen w-full flex-col items-center pt-36"
      id="home"
    >
      <h1 className="font-sembold self-center text-5xl">
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
      <span className="my-5 text-4xl">🇳🇵</span>
      <h2 className="mb-5 text-2xl text-gray-400">
        Computer Science + Full Stack Web Development
      </h2>
      <div className="mb-6 flex items-center gap-5 text-2xl">
        <Socials />
      </div>
      <button className="text-md font-semibold rounded-full border border-solid border-sky-400 px-5 py-2 text-cyan-400 hover:bg-cyan-400/10">
        Resume <MdArrowOutward className="inline text-xl" />
      </button>
    </article>
  );
}

export default Home;
