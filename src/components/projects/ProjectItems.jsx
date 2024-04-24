import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card container " key={item.id}>
      <a href={item.live} target="_blank">
        <img className="project__img" src={item.image} alt="" />
      </a>
      <h3 className="project__title">{item.title}</h3>
      <p className="project__technologies">{item.technologies}</p>
      <p className="project__description">{item.description}</p>
      <div className="project__buttons">
        <a href={item.github} target="_blank" className="project__button">
          <FaGithub />
        </a>
        <a href={item.live} target="_blank" className="project__button">
          <BsArrowUpRightCircleFill />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
