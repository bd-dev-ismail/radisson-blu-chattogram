import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState({name: 'akash'});
    const googleProvider = new GoogleAuthProvider();
    //create user
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Sign in with google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    //Login User
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOut 
    const logOut = ()=>{
        return signOut(auth)
    }
    //onauth state change
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubsribe();
        }
    },[])
    const authInfo = { user, register, googleSignIn, logIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;