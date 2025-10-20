import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

  // create user functionality
  const createUserFunction = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // signIn / Login functionality 
  const signInUserFunction = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign Out functionality 
  const signOutFunction = () => {
   return signOut(auth)
  }

  // get CurrentUser functionality 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })

    return () => {
      unSubscribe()
    }
  }, [])


  const authInfo = {
    user,
    setUser,
    createUserFunction: createUserFunction,
    signOutFunction: signOutFunction,
    signInUserFunction: signInUserFunction,
    loading
  };


  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
