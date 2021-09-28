import { createContext, useContext, useState } from "react";

// Used the context hook to manage data dynamically throughout the entire application

const PostContext = createContext();

export function usePostContext() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [usertext, setUsertext] = useState("");
  const [form, setShowForm] = useState(false);

  const [postedForm, setPostedForm] = useState([
    {
      name: "",
      email: "",
      textField: "",
    },
  ]);

  const value = {
    username,
    setUsername,
    useremail,
    setUseremail,
    usertext,
    setUsertext,
    postedForm,
    setPostedForm,
    form,
    setShowForm,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
