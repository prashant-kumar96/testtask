import React, { useState } from "react";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Content from "./components/RightContent/Content";

const Index = () => {
  let [theme, setTheme] = useState("light");
  let [iscontenthidden, setIsContenthidden] = useState(true);
  return (
    <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
      <LeftNavbar
        theme={theme}
        setTheme={setTheme}
        setIsContenthidden={setIsContenthidden}
      />
      {iscontenthidden ? (
        ""
      ) : (
        <Content theme={theme} iscontenthidden={iscontenthidden} />
      )}
    </div>
  );
};

export default Index;
