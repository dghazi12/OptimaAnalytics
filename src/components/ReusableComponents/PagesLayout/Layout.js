import Button from "../ThreadButton/Button";
import FormPost from "../NewPost/Form";
import CreatedForm from "../PostCreated/Created";
import Title from "../WelcomeTitle/WelcomeTitle";
import { usePostContext } from "../../../context/PostContext";
import "./layout.css";

// Using context to import the information saved to the state in order to render the form on the click of a button

const Layout = ({ mainTitle }) => {
  const { form, setShowForm } = usePostContext();

  const showForm = () => {
    setShowForm(!form);
  };

  return (
    <>
      <div>
        <div className="welcome-thread-container">
          <Title mainTitle={mainTitle} />
        </div>
        <div className="form-thread-container">
          {form ? <FormPost onClick={showForm} /> : null}
        </div>

        <div className="search-container">
          <div className="post-button">
            <Button
              title="New Post"
              backgroundColor="whitesmoke"
              onClick={showForm}
            />
          </div>
        </div>
        <CreatedForm />
      </div>
    </>
  );
};

export default Layout;
