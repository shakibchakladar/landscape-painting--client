import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// social log in providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext=createContext(null)

const FirebasePovider = ({children}) => {
    const [user,setUser]=useState(null)
    // console.log(user);


    // create user
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google log in 
    const googleLogin=()=>{
     return signInWithPopup(auth,googleProvider)

    }
    // github log in 
    const githubLogin=()=>{
        return signInWithPopup(auth, githubProvider)
    }
    // sign out 
    const logOut=()=>{
        setUser(null)
        signOut(auth)
    }


    // observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });
    },[])

    const allValues={
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebasePovider;