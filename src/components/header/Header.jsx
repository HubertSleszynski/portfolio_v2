import React, { useState } from "react";
import "./header.css";
import ScrollIndicator from "./ScrollIndicator";

import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatboxOutline,
  IoReaderOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          HRS.
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <IoHomeOutline className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <IoPersonOutline className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoReaderOutline className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoSettingsOutline className="nav__icon" /> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoChatboxOutline className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <IoClose className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <RxHamburgerMenu />
        </div>
      </nav>
      <ScrollIndicator />
    </header>
  );
}
