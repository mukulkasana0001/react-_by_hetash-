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

    
    // setcounter( (prevcounter) => prevcounter +1)
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
