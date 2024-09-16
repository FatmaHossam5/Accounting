import React, { createContext, useState } from 'react'
export const AuthContext =createContext({});
export default function AuthContextProvider({children}) {
   
    const baseUrl=`http://192.168.1.20:8000/api`;
    
  return (
    <AuthContext.Provider value={{baseUrl}}>
    
    {children}
    
    </AuthContext.Provider>
  )
}
