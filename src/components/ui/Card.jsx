import PropTypes from "prop-types";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp, TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import {
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

function Card({ title }) {
  const categories = {
    Languages: [
      { icon: <IoLogoJavascript />, text: "JavaScript" },
      { icon: <TbBrandCpp />, text: "C++" },
      { icon: <FaHtml5 />, text: "HTML" },
      { icon: <FaCss3Alt />, text: "CSS" },
    ],
    Framework: [
      { icon: <FaReact />, text: "React" },
      { icon: <TbBrandTailwind />, text: "TailwindCSS" },
      { icon: <TbBrandRedux />, text: "Redux-Toolkit" },
    ],
    Database: [
      { icon: <FaDatabase />, text: "MySQL" },
      { icon: <BiLogoMongodb />, text: "MongoDB" },
    ],
    Tools: [
      { icon: <FaGitAlt />, text: "Git" },
      { icon: <IoLogoFirebase />, text: "Firebase" },
    ],
  };

  const items = categories[title] || [];

  return (
    <div className= "bg-slate-900 h-fit w-6/12 rounded-md p-6 text-center md:h-[300px] md:w-6/12 md:px-10 shadow-lg shadow-navHover">
      <h2 className="mb-1 md:mb-4 text-lg font-medium">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex list-none items-center p-1 text-start text-sm"
          >
            <span className="mr-2">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
