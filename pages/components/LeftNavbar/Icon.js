import React from "react";
import styles from "./LeftNavbar.module.css";
import Image from "next/image";

const Icon = ({ src, bg, pd }) => {
  

  return (
    <div className={pd === "10" ? styles.smallicondiv : styles.iconDiv}>
      {/* <div className={styles.icon}>
        <Image src={src} fill alt="" />
      </div> */}
      {src}
    </div>
  );
};

export default Icon;
