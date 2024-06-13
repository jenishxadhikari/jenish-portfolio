import { useParams } from "react-router-dom";

function Project() {
    const {projectid } = useParams();
    return (
      <div>
        <h1>Project</h1>
        <h2>{projectid}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit
          explicabo veritatis beatae labore reprehenderit voluptate accusamus
          corrupti porro ea quis numquam quasi veniam aut, eum obcaecati nihil
          dolore rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum est similique recusandae officia fuga. A qui, voluptate saepe
          sequi eos vitae, possimus ipsa facere tempora quas quo dolorem debitis
          alias!
        </p>
      </div>
    );
  }
  
  export default Project;
  