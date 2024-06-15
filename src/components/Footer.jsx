import { IoIosArrowDropup } from "react-icons/io";
import { Socials } from "../components";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-between gap-10 bg-slate-900 px-16 py-6 text-sm text-white">
      <h3>© {new Date().getFullYear()} Jenish Adhikari</h3>
      <div className="flex items-center gap-5 text-2xl">
        <Socials />
        <ScrollLink
          spy={true}
          smooth={true}
          duration={400}
          offset={-80}
          to={"home"}
        >
          <IoIosArrowDropup className="ml-6 text-4xl text-cyan-400" />
        </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer;
