import "./home.css";
import SportsImage from "../../../images/HomeImages/sports.jpeg";
import HalloweenImage from "../../../images/HomeImages/halloween.jpeg";
import CryptoImage from "../../../images/HomeImages/cryptocurrency.jpeg";
import WebDevelopment from "../../../images/HomeImages/webDevelopment.jpeg";
import Title from "../../ReusableComponents/WelcomeTitle/WelcomeTitle";
import GroupedCards from "../../ReusableComponents/ThreadSubjects/SubjectMap";

const cardsJson = [
  {
    URL: `${SportsImage}`,
    alt: "sports",
    title: "Everything Sports",
    description:
      "In this forum, users discuss everything there needs to be discussed about sports. From basketball to cricket and even fantasy football! Click here to discuss.",
    threads: "5 Threads",
    posts: "5 Posts",
    redirect: "/sports",
  },
  {
    URL: `${HalloweenImage}`,
    title: "Halloween",
    alt: "halloween",
    description:
      "In this forum users discuss different Halloween topics. Feel free to discuss favourite costumes, favourite candies, or haunted houses! Click here to discuss. ",
    threads: "5 Threads",
    posts: "5 Posts",
    redirect: "/halloween",
  },
  {
    URL: `${CryptoImage}`,
    title: "Cryptocurrency",
    alt: "cryptocurrency",
    description:
      "In this forum, users discuss the hot topic of Cryptocurrency. See which coins everyone has their eyes on and what everyone thinks the future may hold! Click here to discuss.",
    threads: "5 Threads",
    posts: "5 Posts",
    redirect: "/crypto",
  },
  {
    URL: `${WebDevelopment}`,
    alt: "web-development",
    title: "Web Development",
    description:
      "In this forum, users discuss the constantly growing industry of web development. Find out which new technologies users are raving about! Click here to discuss",
    threads: "5 Threads",
    posts: "5 Posts",
    redirect: "/dev",
  },
];

const Home = () => {
  return (
    <>
      <div className="title-container">
        <Title mainTitle="Forum at Optima Analytics" />
      </div>
      <GroupedCards cardsJson={cardsJson} />
    </>
  );
};

export default Home;
