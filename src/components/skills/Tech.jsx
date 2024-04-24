import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";

export default function Tech() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technologies</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <FaHtml5 />
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaCss3Alt />
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaSass />
            <div>
              <h3 className="skills__name">SASS</h3>
            </div>
          </div>
          <div className="skills__data">
            <SiTailwindcss />
            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>
          <div className="skills__data">
            <SiStyledcomponents />
            <div>
              <h3 className="skills__name">Styled Components</h3>
            </div>
          </div>
          <div className="skills__data">
            <SiJavascript />
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaReact />
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaGitAlt />
            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
