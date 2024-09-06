import { useState } from 'react'
//  for hooks




function App() {
  
  // let counter = 4;
   let  [counter,setcounter]=  useState(0)
  //  useState forword update to ui or variablesas batches
  let addvalue = () =>{
    console.log(` clicked : ${counter}`)
    // counter = counter +1;
    setcounter( counter +1)

        
    //***  for interview question 
    // question is --  what if we do this (like below ) is counter increment all time or at once 
   /* 
    setcounter( counter +1)
    setcounter( counter +1)
    setcounter( counter +1)
    setcounter( counter +1)
    
    */ 

    // ** answer is --> actualy it is not a working of setcounter( ) it is working of useState() hook as we study in theory thai
                        // the usestate() send all the updates (to ui or variables)  in the batches (with the help of fiber algorithm)
                        //so here all the setcounter added into a same batch because they work same  (so it update at once only)

     
    // if we want update all as one by one

    // setcounter( (prevcounter) => prevcounter +1)   //actualy setcounter() function except a callback function (prevcounter means previous updated value you may chance its name prevcounter to another or anything else )
    // it take privious counter
    // below syntex is same as above prevcounter
    //   setcounter( prevcounter => prevcounter +1)
    // we can also write as
    // setcounter( (counter) => counter +1)
    // setcounter( counter = counter +1)
    // **so if we want to edit privious counter ue use as function with argument and also return the value

  }
  let removevalue = ()=>{
    console.log(`removed: ${counter}`)
    setcounter(counter - 1)
    
   
  }
  return (
    <>
        <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue} >Remove Value</button>


    </>
  )
}

export default App
