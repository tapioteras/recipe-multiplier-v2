import { signOut, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseAppConfig";

interface ILoginPageContext {
  user?: User | null;
  loading: boolean;
  error?: Error;
  logout: () => void;
  isLoggedIn: boolean;
}

export const LoginContext = createContext<ILoginPageContext>(undefined);
export const useLoginContext = () => useContext(LoginContext);
export const LoginContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (!loading) {
      setIsLoggedIn(!!user);
    }
  }, [loading, user]);
  const logout = () => signOut(auth);

  const LoginContextObject: ILoginPageContext = {
    user,
    loading,
    error,
    logout,
    isLoggedIn,
  };
  return (
    <LoginContext.Provider value={LoginContextObject}>
      {children}
    </LoginContext.Provider>
  );
};
