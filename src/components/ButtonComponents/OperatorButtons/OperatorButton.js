import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
      <button className="operatorButton btn">{props.operatorDisp}</button>
    </div>
  );
};

export default OperatorButton;

