import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../util/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    if (employees === null || admin === null) {
      setLocalStorage();
    } else {
      const { employees, admin } = getLocalStorage();
      setUserData({ employees, admin });
    }
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
