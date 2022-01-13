import React, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrscO0jLjscAE9BT1N8lvYTKxjvGSby_4",
  authDomain: "mealstogo-7ce9c.firebaseapp.com",
  projectId: "mealstogo-7ce9c",
  storageBucket: "mealstogo-7ce9c.appspot.com",
  messagingSenderId: "475273501181",
  appId: "1:475273501181:web:c05652e5285f0bb9bc2194",
  measurementId: "G-R91PLV4KD5",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
