import React, { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";
import styles from "./RightContent.module.css";
import data from "./config/files.json";
import Checkbox from "./Checkbox";

const SmallContent1 = ({ iconsrc, heading, pl }) => {
  let [isChecked1, setisChecked1] = useState();

  let data1 = data.filter((value) => {
    if (value.path.split("/")[2] === heading) {
      return value;
    }
  });

  //   console.log(data1);
  const [iconIsOpen, setIconIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex flex-between padding10"
        style={{ paddingLeft: `${pl}` }}
      >
        <span className="fs-18 flex div1">
          {iconsrc} {heading}
        </span>
        {iconIsOpen ? (
          <span className="plus" onClick={() => setIconIsOpen(false)}>
            <AiOutlineMinus />
          </span>
        ) : (
          <span className="plus" onClick={() => setIconIsOpen(true)}>
            <AiOutlinePlus />
          </span>
        )}
      </div>
      {iconIsOpen && (
        <div>
          <div className={styles.checkboxdiv}>
            <div className="flex align-center flex-col p-5 gap-5 fs-18">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) setisChecked1(true);
                  else setisChecked1(false);
                }}
                className="checkboxstyle"
              />{" "}
              Select All
            </div>
            {data1?.map((value, index) => (
              <Checkbox
                data1={data1}
                isChecked1={isChecked1}
                value={value}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallContent1;
