import React ,{useState,useContext} from "react";
 import Usercontext from "../context/userconrtext";

 function Profile(){
    const {user} = useContext(Usercontext)
 
    if(!user) return <div> please logedin </div>

    
        return(
            <div>welcome {user.username}</div>
              )
   

   
 }
 export default Profile