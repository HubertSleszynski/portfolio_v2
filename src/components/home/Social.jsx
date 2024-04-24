import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://github.com/HubertSleszynski"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/hubertsleszynski/"
        className="home__social-icon"
        target="_blank"
      >
        <SlSocialLinkedin />
      </a>
    </div>
  );
}
