import React ,{useState,useContext} from "react";

import Usercontext from "../context/userconrtext";

const Login = ()=>{
    
    const[username,setusername] = useState('')
    const[password,setpassword]= useState('')

    const {setuser} = useContext(Usercontext)
    const handelsubmit =(e)=> {
              e.preventDefault()
              setuser({username,password})

    }
    return(
      <div>
       <h1>Login</h1> 
       <input type="text" placeholder="name"
       value={username}
       onChange={(e)=> setusername(e.target.value)}/> 
       <input type="text" placeholder="password"
       value={password}
       onChange={(e)=> setpassword(e.target.value)}/> 
       <button onClick={handelsubmit} >submit</button>
      </div>
    )
}
export default Login