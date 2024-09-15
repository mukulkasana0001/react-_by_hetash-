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




// return useContext(TheamContext):     ****explaination of this line ***
// useContext is a built-in React hook that lets you access the value stored in a React context.
// TheamContext is likely a context object created using React.createContext(). 
// Contexts are used in React to pass data down the component tree without needing to pass props manually at every level.
// This line of code essentially allows the useTheam hook to return the current value of TheamContext, so any component using useTheam() can access the context's value.

// Example of how it might be used:

// javascript
// Copy code
// const theme = useTheam();

// Here, theme would contain whatever value is stored in the TheamContext.