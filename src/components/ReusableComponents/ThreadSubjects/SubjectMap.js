import SubjectCard from "./Subjects";
import ImageComponent from "../ThreadImages/Images";

// Joining two reusable components and creating a card that will be used to map through an array of objects in the home page

const GroupedCards = (props) => {
  const renderListCards = () => {
    return props.cardsJson.map((card) => (
      <div>
        <ImageComponent card={card} key={card.key} />
        <SubjectCard card={card} key={card.key} />
      </div>
    ));
  };
  return <div style={{ width: "100%" }}> {renderListCards()} </div>;
};

export default GroupedCards;
