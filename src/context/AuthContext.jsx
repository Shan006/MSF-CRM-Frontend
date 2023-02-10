import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [session, setSession] = useState({
        token: null,
        isLogin: false,
    });

    useEffect(() => {
      if(session.token !== null){
        localStorage.setItem("token", session.token);
      }
    }, [session])

    useEffect(() => {
      let token = localStorage.getItem("token");
      if(token){
        setSession({
          token:token,
          isLogin:true
        })
      }
    },[])

    return (
      <AuthContext.Provider value={{ session, setSession }}>
        {children}
      </AuthContext.Provider>
    );
};


export {AuthContext, AuthProvider}