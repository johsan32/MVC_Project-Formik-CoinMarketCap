import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  const signUser = (newUser) => {
    newUser.id = v4();
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const doAuthentication = (email, password) => {
    if (email === "johsan" && password === "Ab-1234") {
      return true;
    }
    return false;
  };

  const login = (email, password) => {
    if (doAuthentication(email, password)) {
      setCurrentUser({ email, password, isCurrent: true });
      navigate("/coins");
    } else {
      console.log("Hata");
    }
  };
  console.log(currentUser);

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCurrentUser(null);
    navigate("/");
  };
  console.log(user);

  return (
    <UserContext.Provider
      value={{ user, signUser, logoutUser, currentUser, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
