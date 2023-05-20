import { useState,createContext } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false);
    const [name,setName]=useState("");
    const [token,setToken]=useState("");

    const Login=(token,name)=>{
        setName(name)
        setToken(token);
        setIsAuth(true)
    }

    const Logout=()=>{
        setName("")
        setToken("");
        setIsAuth(false)
    }
    return(
        <AuthContext.Provider value={{isAuth,token,name,Login,Logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;