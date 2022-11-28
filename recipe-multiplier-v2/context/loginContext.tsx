import { User } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseAppConfig";

interface ILoginPageContext {
  user?: User | null;
  loading: boolean;
  error?: Error;
}

export const LoginContext = createContext<ILoginPageContext>(undefined);
export const useLoginContext = () => useContext(LoginContext);
export const LoginContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const LoginContextObject: ILoginPageContext = {
    user,
    loading,
    error,
  };
  return (
    <LoginContext.Provider value={LoginContextObject}>
      {children}
    </LoginContext.Provider>
  );
};
