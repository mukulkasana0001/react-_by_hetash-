import React, { useState } from "react";

import  Usercontext from "./userconrtext"

const UserContextProvider = ({children})=> {
    
    const [user,setuser]= useState(null)
    return(
        <Usercontext.Provider value={{user ,setuser}}>
        {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider