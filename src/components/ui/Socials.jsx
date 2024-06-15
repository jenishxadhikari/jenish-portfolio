import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

function Socials() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/adhikarijenish/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin color="gray" />
      </a>
      <a href="https://github.com/jenishxadhikari" target="_blank">
        <FiGithub color="gray" />
      </a>
      <a href="mailto:jenishadhikari2060@gmail.com">
        <FiMail color="gray" />
      </a>
    </>
  );
}

export default Socials;
