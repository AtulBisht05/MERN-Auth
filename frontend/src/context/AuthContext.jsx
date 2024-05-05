import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  console.log("mytoken from auth", authToken);
  const localUser = JSON.parse(localStorage.getItem("user")) || null;

  const [authUser, setAuthUser] = useState(localUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storeToken = JSON.parse(localStorage.getItem("token"));
    setAuthToken(storeToken);
    setLoading(false);
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthToken(null);
    setAuthUser(null);
    toast.success("user logged out", { position: "top-right", duration: 3000 });
    console.log("logout");
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <AuthContext.Provider
        value={{ authToken, setAuthToken, authUser, setAuthUser, Logout }}
      >
        <Toaster />
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const userAuth = () => useContext(AuthContext);
