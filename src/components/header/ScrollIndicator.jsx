import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="scroll-progress-tracking-container">
      <div
        className="current-progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
