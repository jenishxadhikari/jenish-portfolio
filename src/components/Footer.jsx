import { IoIosArrowDropup } from "react-icons/io";
import { Socials } from "../components";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-navBg py-4 text-white">
      <div className="flex w-10/12 items-center justify-between">
        <span className="md:text-md text-xs font-medium">
          © {new Date().getFullYear()} Jenish Adhikari
        </span>
        <div className="text-md flex items-center justify-end gap-2 md:gap-6 md:text-2xl">
          <Socials />
          <ScrollLink
            spy={true}
            smooth={true}
            duration={400}
            offset={-80}
            to={"home"}
          >
            <IoIosArrowDropup className="ml-6 text-xl text-cyan-400 md:text-4xl" />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
