import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Context is used to manage Authentication
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(localStorage.getItem("site" || ""));
  const navigate = useNavigate();
  const loginAction = async (data) => {
    // data is login data: user: {username, password}
    // try {
    //   //
    //   const response = await fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   // get
    //   const res = await response.json();
    //   console.log(res.data);
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    // axios
    //   .get("http://localhost:8080/account")
    //   .then((response) => {
    //     const getDatas = response.data;
    //     getDatas.map((getData) => {
    //       if (data.name == getData.name && data.password == getData.password) {
    //         setUser({ name: data.name, password: data.password });
    //         // setToken("123");
    //         return navigate("user/user_management");
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    navigate("user/user_management");

    //     return;
    //   }
    //   throw new Error(res.message);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const logOut = () => {
    setUser(null);
    // setToken("");
    // localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        // token,
        user,
        loginAction,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
