import React from 'react'

import { useParams } from 'react-router-dom'  //we need to import this for taking access of userid(what name you write after :(colon ) use same name not nessery that name is userid it may be something else )  from the path  where user element is render
                                              //useParams is a hook provided by React Router that allows you to access the dynamic parameters in the current URL. 
                                              //When you define routes with dynamic segments (e.g., /users/:id), useParams helps you retrieve those segments in your components.

                                            // How It Works
                                            // When a route includes parameters, useParams extracts those parameters from the URL and returns them as an object.
                                            //  Each key in the object corresponds to a parameter name, and the value is the parameter's value from the URL.

                                            // Example Usage
                                            // Suppose you have a route like /users/:id, where :id is a dynamic parameter. Here's how you can use useParams to access the id parameter in a component:
   
function User(){

    const {userid}= useParams()
return(
   
    <h1> userid :{userid}</h1>
 
)
}

export default User
