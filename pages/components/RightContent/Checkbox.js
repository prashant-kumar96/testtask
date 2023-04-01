import React, { useState, useEffect } from "react";

const Checkbox = ({ data1, isChecked1, value }) => {
  console.log(isChecked1);
  const [iscurrentchecked, setiscurrentchecked] = useState();

  useEffect(() => {
    setiscurrentchecked(isChecked1);
  }, [isChecked1]);

  return (
    <div>
      <div className="flex align-center  flex-col p-5 gap-5 fs-18">
        <input
          type="checkbox"
          className="checkboxstyle"
          checked={iscurrentchecked}
          onChange={(e) => {
            if (e.target.checked) setiscurrentchecked(true);
            else setiscurrentchecked(false);
          }}
        />
        {value?.path?.split("/")[3]} ({value?.size} )
      </div>
    </div>
  );
};

export default Checkbox;
