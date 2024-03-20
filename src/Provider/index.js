import { createContext, useContext, useState } from "react";

const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <SignInContext.Provider value={{setIsSignIn, isSignIn}}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignIn = () => useContext(SignInContext)
