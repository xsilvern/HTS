type PhotoType = {
  address: string;
  description: string;
};
const Photo = (photo: PhotoType) => {
  const { address, description } = photo;
  return (
    <>
      <img src={address} />
      <article>{description}</article>
    </>
  );
};
export default Photo;
