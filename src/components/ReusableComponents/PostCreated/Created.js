import Button from "../ThreadButton/Button";
import Search from "../SearchBar/SearchBar";
import { usePostContext } from "../../../context/PostContext";
import "./created.css";

const Created = () => {
  const { form, setShowForm } = usePostContext();
  const { postedForm, setPostedForm } = usePostContext();

  // Filtering through the list saved in state in order to only render the posts that match the value inputed in the search bar

  const filterPosts = (postedForm, query) => {
    if (!query) {
      return postedForm;
    }

    return postedForm.filter((post) => {
      const postName = post.textField.toLowerCase();
      return postName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const filteredPosts = filterPosts(postedForm, query);

  const handler = function () {
    setShowForm(!form);
  };

  // Function written to delete any unwanted posts

  const deleteItem = (index) => {
    const newPost = postedForm;
    newPost.splice(index, 1);
    setPostedForm([...newPost]);
  };

  return (
    <>
      <Search onClick={filterPosts} />
      <div className="created-main-container">
        {filteredPosts.map((posts, index) => (
          <div key={index} className="created-container">
            <div className="info-container">
              <p>Username: {posts.name}</p>
              <p>Email: {posts.email}</p>
              <div className="buttons-container">
                <div className="reply-container">
                  <Button
                    onClick={handler}
                    created-container={index}
                    title="Reply"
                  />
                </div>
                <div>
                  <Button onClick={() => deleteItem(index)} title="Delete" />
                </div>
              </div>
              <div className="text-container">
                <p className="test">{posts.textField}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Created;
