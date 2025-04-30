import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../src/firebase.init';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setUser(result.user)
    })
    .finally(()=>setLoading(false))
  }

  const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setUser(result.user)
      return result;
    })
    .finally(()=>setLoading(false))
  }

  const googleSignIn= ()=>{
    return signInWithPopup(auth,googleProvider)
    .then(result => {
      setUser(result.user);
      return result;
    })
    .finally(() => setLoading(false));
  }

  const logout = ()=>{
    setLoading(true)
    return signOut(auth)
    .then(()=>{
      setUser(null)
    })
    .finally(()=>{
      setLoading(false)
    })
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    });
    return ()=>unsubscribe();
  },[])


  const userInfo={
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logout,

  }


  return (
    <AuthContext.Provider value={userInfo}>

      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;
