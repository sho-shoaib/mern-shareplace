import React, { useContext, useEffect, useState } from "react";
import { getPosts, getUsers } from "./fetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.places);
    });

    getUsers().then((users) => {
      setUsers(users.users);
    });
  }, []);

  return (
    <AppContext.Provider value={{ posts, users }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
