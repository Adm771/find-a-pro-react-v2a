import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [users, setUsers] = useState();
  const [userById, setUserById] = useState();
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  // Get users
  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/api/v1/users");
    const data = await response.json();
    setUsers(data);
  };

  // Get user by id
  const getUserById = async (userId) => {
    const response = await fetch(`http://localhost:8080/api/v1/user/${userId}`);
    const data = await response.json();
    setUserById(data);
  };

  // Add user (stays as logged user)
  const addUser = async (newUser) => {
    const response = await fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setLoggedUser([data]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loggedUser,
        setLoggedUser,
        userById,
        getUserById,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
