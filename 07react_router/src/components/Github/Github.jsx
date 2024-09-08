
import React from "react";

// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";   // loder lods the data when you hover (it lode dada faster then useeffect )

function Github() {

 const data = useLoaderData()  
    // const [data, setdata] = useState([])
    // useEffect(() => {s
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




//  **** EXPLAIN LOADER BY CHEATGPT***
// In React Router, a loader is used to load data before a route is rendered. 
// This feature is particularly useful when you want to fetch data from an API or perform 
// some asynchronous operations before a route's component is displayed. 
// React Router's loader function allows you to defer rendering until the necessary data is available,
// improving the user experience by preventing empty or loading states within components.

// How Loaders Work
// Loader Function: A loader function is associated with a specific route. It returns data that can be passed as props to the component being rendered by that route.
// Deferred Rendering: The route will wait for the loader function to resolve before rendering the component.
// UseLoaderData Hook: The useLoaderData hook is used inside the component to access the data returned by the loader.

// Explanation:

// Loader Function (gitInfoLoader):
// The gitInfoLoader function is an async function that fetches data from an API. This data will be available to the route when it renders.

// Loader in Route:
// The loader property in the route configuration points to the gitInfoLoader function. React Router automatically calls this function when the route is matched.

// useLoaderData Hook:
// Inside the github component, useLoaderData is used to access the data returned by the loader function.