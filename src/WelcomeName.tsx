import { ChangeEvent, useState } from "react";
const WelcomeName = () => {
  const [name, setName] = useState<string>();
  const nameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <>
      <article>반갑습니다 {name}님</article>
      <input type="text" onChange={nameChange} />
    </>
  );
};
export default WelcomeName;
