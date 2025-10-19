import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user functionality
  const createUserFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // signIn / Login functionality 
  const signInUserFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign Out functionality 
  const signOutFunction = () => {
   return signOut(auth)
  }

  // get CurrentUser functionality 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
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
    signInUserFunction: signInUserFunction
  };


  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
