import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // email password login
    const registerUser = (email, password, displayName, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(
            (userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName,
                    photoURL,
                })
                .then(() => {
                    return userCredential
                })

            }
        )
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user are live ', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    })


    const authInfo = {
        user,
        loading,
        registerUser,
    }

   return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
};

export default AuthProviders;