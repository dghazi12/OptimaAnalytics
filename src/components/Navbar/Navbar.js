import Optima from "../../images/OptimaLogo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <img className="logo" src={Optima} alt="optima-analytics-logo" />
      <a href="/" className="home-text">
        Home
      </a>
    </div>
  );
};

export default Navbar;
