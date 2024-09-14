import { createContext,useContext } from "react";

export const TheamContext = createContext({
    theamMode: "light",
    Darktheam: ()=>{},
    Lighttheam:()=>{},

})


export const TheamProvider  = TheamContext.Provider

export default function usetheam(){
    return useContext(TheamContext)
}