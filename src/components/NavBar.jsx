import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const menuItems = [
    { name: "About me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="w-full border-b bg-white pb-4 flex justify-between fixed p-4">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={400}
      >
        <h3>Jenish Adhikari</h3>
      </ScrollLink>
      <nav>
        <ul className="flex gap-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                spy={true}
                smooth={true}
                duration={400}
                offset={-80}
                to={item.link}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
