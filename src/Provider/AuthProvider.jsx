import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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


  // updata User functionality 
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser,  updatedData)
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
    loading,
    updateUser: updateUser
  };


  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
