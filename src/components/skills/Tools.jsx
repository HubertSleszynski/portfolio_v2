import { SiVisualstudiocode, SiVite, SiFirebase } from "react-icons/si";
import { FaGithub, FaFigma, FaNpm, FaYarn } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

export default function Tools() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiVisualstudiocode />
            <div>
              <h3 className="skills__name">VS Code</h3>
            </div>
          </div>
          <div className="skills__data">
            <SiVite />
            <div>
              <h3 className="skills__name">Vite</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaNpm />
            <div>
              <h3 className="skills__name">Npm</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaYarn />
            <div>
              <h3 className="skills__name">Yarn</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaGithub />
            <div>
              <h3 className="skills__name">Github</h3>
            </div>
          </div>
          <div className="skills__data">
            <SiFirebase />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
          <div className="skills__data">
            <FaFigma />
            <div>
              <h3 className="skills__name">Figma</h3>
            </div>
          </div>
          <div className="skills__data">
            <BiLogoNetlify />
            <div>
              <h3 className="skills__name">Netlify</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
