import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
      { operatorState.map((operator, index) => <OperatorButton key={index} operatorDisp={operator.char} value={operator.value} />) }
    </div>
  );
};

export default Operators;
