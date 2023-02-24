import { useState,createContext } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false);
    const [token,setToken]=useState("");

    const Login=(token)=>{
        setToken(token);
        setIsAuth(true)
    }

    const Logout=()=>{
        setToken("");
        setIsAuth(false)
    }
    return(
        <AuthContext.Provider value={{isAuth,token,Login,Logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;