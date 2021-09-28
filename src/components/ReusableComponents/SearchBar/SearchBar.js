import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search.css";

const SearchBar = ({ onChange, onClick }) => {
  return (
    <>
      <input
        className="bar-style"
        type="text"
        onChange={onChange}
        placeholder={"Search Thread"}
      />
      <FontAwesomeIcon
        className="font-icon"
        onClick={onClick}
        icon={faSearch}
      />
    </>
  );
};

export default SearchBar;
