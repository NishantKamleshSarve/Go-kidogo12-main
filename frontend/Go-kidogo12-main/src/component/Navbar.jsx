import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLanguage } from "../LanguageContext";

export default function Navbar({ openLoginModal }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const langRef = useRef(null);

  const { translate, switchLanguage, lang } = useLanguage();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles["nav-menu"]}>
      {/* City Dropdown */}
      <div className={styles["dropdown"]}>
        <NavLink
          to="/city"
          className={({ isActive }) =>
            `${styles["nav-link"]} ${isActive ? styles.active : ""}`
          }
        >
          {translate("t1")}
        </NavLink>
        <ul className={styles["dropdown-menu"]}>
          {["BAD VILBEL", "HANAU", "MAINZ", "BAD NAUHEIM", "FRANKFURT AM MAIN"].map((city) => (
            <li key={city}>
              <NavLink
                to={`/city/${city}`}
                className={({ isActive }) =>
                  `${styles["dropdown-item"]} ${isActive ? styles.active : ""}`
                }
              >
                {city}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Static Links */}
      <NavLink
        to="/partner"
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles.active : ""}`
        }
      >
        {translate("t2")}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles.active : ""}`
        }
      >
        {translate("t3")}
      </NavLink>

      <NavLink
        to="/gokido-tool"
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles.active : ""}`
        }
      >
        {translate("t4")}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles.active : ""}`
        }
      >
        {translate("t5")}
      </NavLink>

      {/* Language Switcher */}
      <div className={styles["language-selector"]} ref={langRef}>
        <button
          className={styles["language-button"]}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {lang === "en" ? "English (EN)" : "German (DE)"}
          <svg
            className={styles["dropdown-icon"]}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className={styles["language-dropdown"]}>
            <button
              className={styles["dropdown-item"]}
              onClick={() => {
                switchLanguage("en");
                setIsDropdownOpen(false);
              }}
            >
              English (EN)
            </button>
            <button
              className={styles["dropdown-item"]}
              onClick={() => {
                switchLanguage("de");
                setIsDropdownOpen(false);
              }}
            >
              German (DE)
            </button>
          </div>
        )}
      </div>

      {/* Login Button */}
      <button onClick={openLoginModal} className={styles["login-button"]}>
        Log in
      </button>
    </nav>
  );
}
