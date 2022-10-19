import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //create user
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //Login User
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //verify email
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  //change password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //onauth state change
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unsubsribe();
    };
  }, []);
  //update profile details
  const profileUpdate = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const authInfo = {
    user,
    loading,
    name,
    setName,
    register,
    googleSignIn,
    logIn,
    profileUpdate,
    logOut,
    verifyEmail,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;