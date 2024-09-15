import React from "react";
import usetheam from "../context/theam";


export default function  Button(){

   const {theamMode,Darktheam,Lighttheam}= usetheam()

   const  onchangebtn= (e)=>{
    const darkmodestatus = e.currentTarget.checked
    if(darkmodestatus){
        Darktheam() 
    }
    else{
        Lighttheam()
    }
   }

return (
    <label className="relative inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked= {theamMode==='dark'}
            onChange={onchangebtn}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
);
}





// ***EXPLAIN OF 'checked' BY USING CHEATGPT ****

// It checks if the checkbox is checked (e.currentTarget.checked returns true if it's checked).
// If it is checked, it calls Darktheam() to apply the dark theme; otherwise, it calls Lighttheam() to apply the light theme.
// The checked Attribute:

// javascript
// Copy code
// checked={theamMode === 'dark'}


// This controls whether the checkbox is checked (selected) or not.
// If theamMode is equal to 'dark', the checkbox will be checked (i.e., checked={true}).
// If theamMode is equal to anything else (like 'light'), the checkbox will not be checked (i.e., checked={false}).