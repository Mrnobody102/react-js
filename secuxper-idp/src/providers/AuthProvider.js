import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Context is used to manage Authentication
const AuthContext = createContext();

/**
 * Authentication context provider.
 * @param {Object} props 
 * @param {React.ReactNode} props.children
 */
function AuthProvider({ children }) {
  /**
   * Current authenticated user object.
   * @type {Object|null}
   */
  const [user, setUser] = useState(null);
  // /**
  //  * Current user token.
  //  * @type {string}
  //  */
  // const [token, setToken] = useState(localStorage.getItem("site") || "");
  /**
   * React Router navigate function.
   * @type {Function}
   */
  const navigate = useNavigate();
  /**
   * Login action function.
   * @param {Object} data - Login data: user: {username, password}
   * @returns {void}
   */
  const loginAction = async (data) => {
    // try {
    //   const response = await fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const res = await response.json();
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    //   }
    //   throw new Error(res.message);
    // } catch (error) {
    //   console.log(error);
    // }

    // Mock login
    await axios
      .get("http://localhost:8080/account")
      .then((response) => {
        const getDatas = response.data;
        getDatas.map((getData) => {
          if (
            data.name === getData.name &&
            data.password === getData.password
          ) {
            setUser({ name: data.name, password: data.password });
            // setToken("123");
            return navigate("user/user_management");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });

    navigate("user/user_management");
  };
  /**
   * Log out action function.
   * @returns {void}
   */
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
