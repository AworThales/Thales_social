import { createContext, useEffect, useState } from "react";


export const DarkModeContext = createContext()

// creating contextProvide that will wrap our entire app.

export const DarkModeContextProvider = ({children}) =>{
    // creating darkmode usestate and check our localstaorage if there is dark mode or not and if there is no darkmode it means user visit for the first so we set it false
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    // toggling our dark mode from false to true or true to false
    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    // useffct for darkmode
    useEffect(()=>{
        localStorage.setItem("darkMode", darkMode)
    },[darkMode])

    
    // returning darkmodeprovider
    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}