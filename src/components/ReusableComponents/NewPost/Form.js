import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Button from "../ThreadButton/Button";
import { usePostContext } from "../../../context/PostContext";
import "./form.css";

const Form = () => {
  //Importing all states from the context folder

  const { username, setUsername } = usePostContext();
  const { useremail, setUseremail } = usePostContext();
  const { usertext, setUsertext } = usePostContext();
  const { postedForm, setPostedForm } = usePostContext();
  const { form, setShowForm } = usePostContext();

  // Creating a function that will save all the information inputed into the form to the state in order to render it to the DOM on submit

  const HandleSubmit = (evt) => {
    setPostedForm([
      ...postedForm,
      { name: username, email: useremail, textField: usertext },
    ]);
    evt.preventDefault();
    setUsername("");
    setUseremail("");
    setUsertext("");
    setShowForm(false);
  };

  // Function written to close the form if the user does not want to post anything
  const CloseForm = () => {
    setShowForm(!form);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="form-container">
        <FontAwesomeIcon
          onClick={CloseForm}
          icon={faWindowClose}
          className="close-icon"
        />
        <label className="label">
          <div>
            <input
              className="username-text"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="email-text"
              placeholder="Email"
              type="text"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="form-text"
              type="text"
              value={usertext}
              onChange={(e) => setUsertext(e.target.value)}
            />
          </div>
        </label>
        <Button title="Submit" backgroundColor="#9c2222" />
      </div>
    </form>
  );
};

export default Form;
