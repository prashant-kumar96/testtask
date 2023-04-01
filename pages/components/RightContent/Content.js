import React, { useState, useEffect } from "react";
import styles from "./RightContent.module.css";
import SmallContent from "./SmallContent";
import SmallContent1 from "./SmallContent1";
import { BiTime } from "react-icons/bi";
import { BsDatabaseDown } from "react-icons/bs";
import data from "./config/files.json";

const Content = ({ theme }) => {
  let [firstIconIsOpen, setFirstIconIsOpen] = useState(false);
  let [secondIconIsOpen, setSecondIconIsOpen] = useState(false);

  // console.log(data.map((value) => value.path.split("/")[3]));
  let filenames = data.map((value) => value.path.split("/")[3].split(".")[0]);
  // console.log(filenames);
  let data2 = data.map((value) => value.path.split("/")[2]);
  let data3 = new Set(data2);
  let data3array = Array.from(data3);
  // console.log(data3array);
  return (
    <div className={theme === "dark" ? styles.contentdark : styles.content}>
      <div className={styles.contentchild}>
        <SmallContent
          iconIsOpen={firstIconIsOpen}
          setIconIsOpen={setFirstIconIsOpen}
          heading="SPACE DATA"
          fs="17px"
        />
        {firstIconIsOpen && (
          <SmallContent
            iconIsOpen={secondIconIsOpen}
            setIconIsOpen={setSecondIconIsOpen}
            heading="Time"
            iconsrc={
              <BiTime className={theme === "dark" ? "iconlight" : "icondark"} />
            }
            pl="20px"
            fs="fs-20"
          />
        )}
        {secondIconIsOpen &&
          data3array.map((value, index) => (
            <SmallContent1
              heading={value}
              iconsrc={
                <BsDatabaseDown
                  className={theme === "dark" ? "iconlight" : "icondark"}
                />
              }
              pl="40px"
              fw="light"
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Content;
