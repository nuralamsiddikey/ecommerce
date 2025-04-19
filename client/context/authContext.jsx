"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (token, user) => {
    Cookies.set("token", token, { expires: 7, path: "/" });
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
    toast.success("Logout successful");
  };

  const isAuthenticated = () => {
    return !!Cookies.get("token");
  };

  const getToken = () => {
    return Cookies.get("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
