import TypewriterComponent from "typewriter-effect";

function Projects() {
  return (
    <div
      className="h-fit w-full pt-20 text-white md:flex md:flex-col"
      id="projects"
    >
      <h1 className="text-center text-3xl font-medium md:text-4xl">Projects</h1>
      <p className="mt-12 text-center text-lg">
        {" "}
        <em>
          <TypewriterComponent
            options={{
              strings: ["In Progress ..."],
              delay: 100,
              loop: true,
              autoStart: true,
              cursor: ".",
            }}
          />
        </em>
      </p>
    </div>
  );
}

export default Projects;
