import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from '../../../data' 


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      { numberState.map((num, index) => {
         return <NumberButton key ={index} numberDisp ={num} />;
        })
      }
    </div>
  );
};

export default Numbers;