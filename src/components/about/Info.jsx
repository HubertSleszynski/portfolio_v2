import { SlBadge } from "react-icons/sl";
import { CgWorkAlt } from "react-icons/cg";
import { IoSchoolOutline } from "react-icons/io5";

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <SlBadge />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">35+ Projects</span>
      </div>
      <div className="about__box">
        <CgWorkAlt />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year</span>
      </div>
      <div className="about__box">
        <IoSchoolOutline />
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">
          Bialystok University of Technology
        </span>
      </div>
    </div>
  );
}
