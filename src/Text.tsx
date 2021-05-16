type TypeText = {
  text: string;
  type: string;
};
const Text = (typeText: TypeText) => {
  const { text, type } = typeText;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};
export default Text;
