import React from "react";
import styles from "./LeftNavbar.module.css";
// import Icon from "./Icon";
import { BsStack } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const LeftNavbar = ({ theme, setTheme, setIsContenthidden }) => {
  console.log(theme);
  return (
    <div className={styles.leftMenu}>
      <div className={styles.top}>
        <div
          className={theme === "dark" ? styles.icondiv2 : styles.iconDiv}
          onMouseEnter={() => {
            setIsContenthidden(true);
          }}
        >
          <BiHomeAlt2 className={theme === "dark" ? "iconwhite" : "icon"} />
        </div>
        <div
          className={`${
            theme === "dark" ? styles.icondiv2 : styles.iconDiv
          } violet`}
          onMouseEnter={() => {
            setIsContenthidden(false);
          }}
        >
          <BsStack className={theme === "dark" ? "iconwhite" : "icon"} />
        </div>
      </div>
      <div className={theme === "dark" ? styles.bottomdark : styles.bottom}>
        <div
          className={styles.smallicondiv}
          onClick={() => {
            setTheme("light");
          }}
        >
          <CiLight className={theme === "dark" ? "iconwhite" : "icon"} />
        </div>

        <div
          className={
            theme === "dark" ? styles.smallicondivdark : styles.smallicondiv
          }
          onClick={() => {
            setTheme("dark");
          }}
        >
          <MdDarkMode className={theme === "dark" ? "iconwhite" : "icon"} />
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
