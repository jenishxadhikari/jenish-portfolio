import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const menuItems = [
    { name: "About me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const Navlink = ({ children, link }) => (
    <li className="list-none px-3 py-1 text-lg hover:rounded-lg hover:bg-slate-800">
      <ScrollLink
        spy={true}
        smooth={true}
        duration={400}
        offset={-80}
        to={link}
      >
        {children}
      </ScrollLink>
    </li>
  );

  Navlink.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <header className="sticky top-0 flex w-full content-center justify-between bg-slate-950 px-16 py-5 text-white">
      <Navlink link={"home"}>
        <h3 className="font-bold sm:p-0 sm:text-center">Jenish Adhikari</h3>
      </Navlink>

      <nav className="flex gap-6">
        <ul className="flex gap-4">
          {menuItems.map((item) => (
            <Navlink key={item.link} link={item.link}>
              {item.name}
            </Navlink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
