import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "About me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const Navlink = ({ children, link }) => (
    <li className="list-none pb-2 text-sm md:rounded-md md:px-2 md:py-1 md:hover:bg-navHover">
      <ScrollLink
        spy={true}
        smooth={true}
        duration={400}
        offset={-80}
        to={link}
        activeClass="border-b-2 border-cyan-400 pb-1"
        onClick={() => setMenuOpen(!menuOpen)}
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
    <header className="fixed top-0 z-50 flex w-full items-center justify-center bg-navBg py-3 text-white">
      <nav className="flex w-10/12 items-center justify-between">
        <ScrollLink
          spy={true}
          smooth={true}
          duration={400}
          offset={-80}
          to={"home"}
        >
          <h3 className="text-md font-semibold md:rounded-md md:px-2 md:py-1 md:hover:bg-navHover">
            Jenish Adhikari
          </h3>
        </ScrollLink>

        <button
          className="rounded-md bg-navHover p-2 text-sm md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`absolute left-0 top-full w-full bg-navBg py-1 text-center ${menuOpen ? "block" : "hidden"} md:static md:flex md:w-auto md:gap-5`}
        >
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
