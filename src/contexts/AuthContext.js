import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  const logout = async () => {
    return await signOut(auth);
  };
  const reset = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };
  const updatedEmail = async (email) => {
    try {
      await updateEmail(currentUser, email);
    } catch (err) {
      setError(err);
    }
  };
  const updatedPassword = async (password) => {
    try {
      await updatePassword(currentUser, password);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signUp,
    login,
    logout,
    error,
    reset,
    updatedEmail,
    updatedPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
