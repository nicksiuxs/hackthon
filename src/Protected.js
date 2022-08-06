import React from "react";
import { Navigate } from "react-router";
import useAppContext from "./customHooks/useAppContext";

const Protected = ({ children }) => {
  const {
    state: { template },
  } = useAppContext();

  if (Object.keys(template).length === 0) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
