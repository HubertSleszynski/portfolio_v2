import "./skills.css";
import Tech from "./Tech";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Things I use</span>

      <div className="skills__container container grid">
        <Tech />
        <Tools />
      </div>
    </section>
  );
}
