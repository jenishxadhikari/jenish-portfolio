import { Card } from "../components";

function Skills() {
  return (
    <section className="flex h-fit flex-col items-center pt-20 text-white">
      <h1 className="text-center text-4xl font-medium" id="skills">
        Skills
      </h1>
      <div className="mt-12 flex w-10/12 flex-col gap-6 md:flex-row md:justify-center">
        <div className="flex gap-1 md:gap-6">
          <Card title={"Languages"} />
          <Card title={"Framework"} />
        </div>
        <div className="flex gap-1 md:gap-6">
          <Card title={"Database"} />
          <Card title={"Tools"} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
