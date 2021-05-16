import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={changeName} />
      <article>
        {name.substr(0, 1)}
        {name.length > 2 ? "*".repeat(name.length - 2) : ""}
        {name.length > 1 ? name.substr(name.length - 1, name.length) : ""}
      </article>
    </>
  );
};
export default HiddenName;
