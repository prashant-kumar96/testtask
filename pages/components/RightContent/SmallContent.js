import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";

const SmallContent = ({
  iconIsOpen,
  setIconIsOpen,
  iconsrc,
  heading,
  pl,
  fs,
  fw,
}) => {
  return (
    <div>
      <div
        className="flex flex-between padding10 transition1"
        style={{ paddingLeft: `${pl}` }}
      >
        <span
          className={fw === "light" ? `flex div1` : `freesansbold flex div1`}
        >
          {iconsrc}{" "}
          <span
            className={fs === "fs-20" ? `fs-20` : fs === "17px" ? fs - 17 : ""}
          >
            {heading}
          </span>
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
    </div>
  );
};

export default SmallContent;
