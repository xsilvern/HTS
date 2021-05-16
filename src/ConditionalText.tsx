import { ChangeEvent, useState } from "react";
const ConditionalText = () => {
  const [name, setName] = useState<string>("");
  const nameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={nameChange} />
      <article>{name.length > 5 ? name : ""}</article>
    </>
  );
};
export default ConditionalText;
