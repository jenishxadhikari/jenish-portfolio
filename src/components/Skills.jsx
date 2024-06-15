import { Card } from "../components";

function Skills() {
  return (
    <section className="h-screen w-9/12 pt-10" id="skills">
      <h1 className="text-center text-4xl font-medium">Skills</h1>
      <div className="mt-10 flex gap-10">
        <Card title={'Languages'} />
        <Card title={'Framework'} />
        <Card title={'Database'} />
        <Card title={'Tools'} />
      </div>
    </section>
  );
}

export default Skills;
