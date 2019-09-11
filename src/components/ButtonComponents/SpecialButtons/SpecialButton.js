import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="specialButton btn">
        {props.specialDisp}
      </button>
    </>
  );
};

export default SpecialButton;
