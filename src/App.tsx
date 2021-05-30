import { ChangeEvent, KeyboardEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import Trade from "./pages/Trade";
const App = () => {
  const [latestName, setLatesName] = useState("");
  const updateLatestName = (name: string) => {
    setLatesName(name);
  };
  return (
    <>
      <Trade />
    </>
  );
};

export default App;
