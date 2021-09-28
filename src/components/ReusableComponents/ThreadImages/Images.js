import "./images.css";

const Images = ({ URL, alt }) => {
  return (
    <div className="image-container">
      <img className="image" src={URL} alt={alt} />{" "}
    </div>
  );
};

export default Images;
