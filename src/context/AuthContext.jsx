import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [session, setSession] = useState();
  const [token, setToken] = useState({
    tk: "",
    status: false,
  });
  const [backendUri, setBackendUri] = useState("http://localhost:8000/api/v1");
  // const Navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("AuthToken", token.tk);
  }, [token]);
  // const CheckAuth = () => {
  //   axios
  //     .get(`${backendUri}/user/me`)
  //     .then((res) => {
  //       setSession("LoggedIn");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <AuthContext.Provider value={{ token, setToken, backendUri }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
