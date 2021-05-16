type ButtonType = {
  name: string;
  callBack: (name: string) => void;
};

const Button = (props: ButtonType) => {
  const { name, callBack } = props;
  return <button onClick={() => callBack(name)}>{name}</button>;
};
export default Button;
