import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

const ProtectedRoute = ({ Component }) => {
  const { token } = useContext(AuthContext);

  return <>{token.status ? <Component /> : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
