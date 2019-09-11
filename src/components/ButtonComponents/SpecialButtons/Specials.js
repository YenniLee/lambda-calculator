import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from "../../../data.js";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  
  return (
    <div>
       { specialState.map((special, index) => <SpecialButton specialDisp={special} value={special} key={index}/>) }
    </div>
  );
};

export default Specials;