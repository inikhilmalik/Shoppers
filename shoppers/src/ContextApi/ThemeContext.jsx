import { useState,createContext } from "react";

export const ThemeContext=createContext();

function ThemeContextProvider({children}){
    const [theme,setTheme]=useState(false);

    const toggleTheme=()=>{
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;