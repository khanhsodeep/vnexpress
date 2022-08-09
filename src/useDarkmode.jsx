import React,{useEffect, useState} from "react";
const useDarkmode = () => {
    const[isDarkmode, setDarkmode] = useState(()=> localStorage.theme === "darkmode")
    const toggleDarkmode = () =>{
setDarkmode(!isDarkmode)
    }
    useEffect(()=>{
        const htmls= window.document.documentElement;
        const prev = isDarkmode ? "light" : "dark"
        htmls.classList.remove(prev)
        const next = isDarkmode ? "dark" : "light";
        htmls.classList.add("theme", next)
        localStorage.setItem("theme", next)
    },[isDarkmode])
    return [isDarkmode, toggleDarkmode];
}
 
export default useDarkmode;