import { ChangeEvent, KeyboardEvent, useState } from "react";
import Pad from "./Pad";

const Calculator = () => {
  const [currentNumber, updateCurrentNumber] = useState("");
  const updateCal = (name: string) => {};
  return (
    <>
      <Pad keyName="1" callBack={updateCal} />
      <Pad keyName="2" callBack={updateCal} />
      <Pad keyName="3" callBack={updateCal} />
      <br />
      <Pad keyName="4" callBack={updateCal} />
      <Pad keyName="5" callBack={updateCal} />
      <Pad keyName="6" callBack={updateCal} />
      <br />
      <Pad keyName="7" callBack={updateCal} />
      <Pad keyName="8" callBack={updateCal} />
      <Pad keyName="9" callBack={updateCal} />
      <br />
      <Pad keyName="0" callBack={updateCal} />
      <Pad keyName="+" callBack={updateCal} />
      <Pad keyName="-" callBack={updateCal} />
      <Pad keyName="*" callBack={updateCal} />
      <Pad keyName="/" callBack={updateCal} />
      <Pad keyName="=" callBack={updateCal} />
      <br />
      <input type="text" value={currentNumber} />
    </>
  );
};
export default Calculator;
