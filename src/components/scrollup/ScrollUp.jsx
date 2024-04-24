import { FaArrowUpLong } from "react-icons/fa6";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <FaArrowUpLong className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
