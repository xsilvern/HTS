type PadType = {
  keyName: string;
  callBack: (key: string) => void;
};

const Pad = (props: PadType) => {
  const { keyName, callBack } = props;
  return <button onClick={() => callBack(keyName)}>{keyName}</button>;
};
export default Pad;
