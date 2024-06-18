import { useLoaderData } from "react-router-dom";

function About() {
  const data = useLoaderData();
  return (
    <section
      className="h-fit w-full text-white md:flex md:flex-col md:items-center md:pt-14"
      id="about"
    >
      <h1 className="text-center text-3xl font-medium md:text-4xl">About me</h1>
      <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-center">
        <img
          src={data.avatar_url}
          alt="My picture"
          className="h-24 w-24 rounded-full border-4 border-indigo-200 md:h-36 md:w-36"
        />
        <ul className="w-10/12 md:w-9/12">
          <div className="mb-6 flex items-center">
            <span className="mr-3 text-lg">👋🏼</span>
            <li>
              Hi, I'm Jenish and I'm a third year Computer Science student at
              <strong> Tribhuvan University.</strong>
            </li>
          </div>
          <div className="mb-6 flex items-center">
            <span className="mr-3 text-lg">👨🏻‍💻</span>
            <li>
              I'm passionate about <strong>Software Engineering</strong> and
              technology.
            </li>
          </div>
          <div className="mb-6 flex items-center">
            <span className="mr-3 text-lg">🚀</span>
            <li>
              I've built a strong foundation in <strong>front-end</strong> web
              development, with a focus on <strong>JavaScript</strong> and{" "}
              <strong>ReactJS</strong>.
            </li>
          </div>
          <div className="mb-6 flex items-center">
            <span className="mr-3 text-lg">🎓</span>
            <li>
              I'm currently seeking an internship to apply my skills and
              knowledge in a practical setting.
            </li>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-lg">🧠</span>
            <li>
              In addition to Web Development, I am also interested in Machine
              learning and Artificial Intelligence.
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default About;
