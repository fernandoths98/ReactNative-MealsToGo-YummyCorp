import React, { useState, useEffect, createContext } from "react";
import { initializeApp } from "firebase/app";
import {loginRequest} from "./authentication.service";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth();
    // console.log(onLogin)
    const onLogin = (auth, email, password) => {
        setIsLoading(true);
        loginRequest(auth, email, password)
        .then((u) => {
            setUser(u);
            console.log(u)
            setIsLoading(false);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.toString());
        })
    }

    const onRegister = (email, password, confirmPassword) => {
        setIsLoading(true);
        if (password !== confirmPassword) {
          setError("Error: Password do not match");
          setIsLoading(false);
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then((u) => {
            setUser(u);
            setIsLoading(false);
          })
          .catch((e) => {
            setError(e.toString());
            setIsLoading(false);
          });
      };

      const onLogout = () => {
        setUser(null);
        signOut(auth);
        console.log(signOut);
      };

    return (
    <AuthenticationContext.Provider
    value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
    }}
    >
        
        {children}</AuthenticationContext.Provider>
  );
};
