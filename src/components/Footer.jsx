import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import {Link as ScrollLink} from 'react-scroll'

function Footer() {
  return (
    <footer className="flex w-full items-center justify-between gap-10 bg-gray-900 px-16 py-6 text-sm text-white">
      <h3>© {new Date().getFullYear()} Jenish Adhikari</h3>
      <div className="flex gap-5 text-2xl items-center">
        <a
          href="https://www.linkedin.com/in/adhikarijenish/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin color="gray" />
        </a>
        <a href="https://x.com/_jenishadhikari" target="_blank">
          <FaXTwitter color="gray" />
        </a>
        <a href="mailto:jenishadhikari2060@gmail.com">
          <MdOutlineEmail color="gray" />
        </a>
        <ScrollLink
          spy={true}
          smooth={true}
          duration={400}
          offset={-80}
          to={"home"}
        >
         <IoIosArrowDropup color="sky" className="ml-6 text-4xl" />
        </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer;
