import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!!token) {
      setAuthenticated(true);
    }
  }, [token]);

  const login = () => {
    localStorage.setItem("token", "token_123");
    setTimeout(() => setAuthenticated(true), 1000);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
