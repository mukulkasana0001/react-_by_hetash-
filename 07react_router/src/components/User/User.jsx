import React from 'react'

import { useParams } from 'react-router-dom'  //we need to import this for taking access of userid(what name you write after :(colon ) use same name not nessery that name is userid it may be something else )  from the path  where user element is render

function User(){

    const {userid}= useParams()
return(
   
    <h1> userid :{userid}</h1>
 
)
}

export default User
