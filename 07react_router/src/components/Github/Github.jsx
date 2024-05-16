
import React from "react";

// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";   // loder lods the data when you hover (it lode dada faster then useeffect )

function Github() {

 const data = useLoaderData()  
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mukulkasana0001')
    //         .then((Response) => {
    //             return Response.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setdata(data)
    //         }
    //         )
    // }, [ ])
    return (
        <div className="text-center m-4   bg-gray-500 text-white  ">

            <div> <img className="h-20.1  object-center m-auto rounded-full   " src={data.avatar_url} alt="" /> User Name: {data.name}</div>
            <div>user id: {data.login}</div>
            <div> Github Followers: {data.followers}</div>

        </div>
    )
}

export default Github

// this is another way by using loader 
export const gitInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/mukulkasana0001')
    return response.json()
}
