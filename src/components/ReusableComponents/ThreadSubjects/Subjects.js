import { useHistory } from "react-router-dom";

import ImageComponent from "../ThreadImages/Images";
import "./subjects.css";

const Subjects = (props) => {
  const history = useHistory();
  return (
    // Creating a reusable component that will render the different categories on the home page of the application

    <div className="main-container">
      <ImageComponent URL={props.card.URL} alt={props.card.alt} />

      <div
        onClick={() => history.push(`${props.card.redirect}`)}
        className="subject-container"
      >
        <div className="subject-info-container">
          <h2 className="subject-title">{props.card.title}</h2>
          <p className="subject-description">{props.card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
