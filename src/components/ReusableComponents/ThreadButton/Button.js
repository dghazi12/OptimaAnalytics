import "./button.css";

const ThreadButton = ({ onClick, title, backgroundColor }) => {
  return (
    <div>
      <button
        className="new-button"
        variant="outlined"
        style={{ backgroundColor }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default ThreadButton;
