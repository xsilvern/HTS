import { ChangeEvent, useState } from "react";

const Adder = () => {
  const [num1, setnum1] = useState<number>(0);
  const [num2, setnum2] = useState<number>(0);
  const preventKeyDown1 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setnum1(Number.parseInt(event.currentTarget.value, 10));
  };
  const preventKeyDown2 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setnum2(Number.parseInt(event.currentTarget.value, 10));
  };
  const calculated = num1 + num2;
  return (
    <>
      <article>{calculated}</article>
      <section>
        <input type="text" onChange={preventKeyDown1} />
        +
        <input type="text" onChange={preventKeyDown2} />
      </section>
    </>
  );
};
export default Adder;
