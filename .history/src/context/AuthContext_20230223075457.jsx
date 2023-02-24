import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState({
    token: null,
    isLogin: false,
  });
  const[taskModal,setTaskModal]=useState(false);
  const Navigate = useNavigate();
  const [backendUri, setBackendUri] = useState("http://localhost:8000/api/v1");
  function openTaskModal() {
    setTaskModal(true);
  }
  function closeTaskModal() {
    setTaskModal(false);
    setEmailForm("");
  }
  // useEffect(() => {
  //   if (session.token !== null) {
  //     localStorage.setItem("token", session.token);
  //     // msf_token
  //   }
  // }, [session]);
  useEffect(() => {
    let x = document.cookie;
    console.log(x);
    // let token = localStorage.getItem("token");
    // if (token) {
    //   setSession({
    //     token: token,
    //     isLogin: true,
    //   });
    // }
  }, []);

  

  return (
    <AuthContext.Provider value={{ session, setSession, backendUri,openTaskModal,closeTaskModal}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
