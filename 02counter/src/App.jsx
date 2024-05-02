import { useState } from 'react'
//  for hooks




function App() {
  
  // let counter = 4;
   let  [counter,setcounter]=  useState(0)
  let addvalue = () =>{
    console.log(` clicked : ${counter}`)
    // counter = counter +1;
    setcounter(counter = counter +1)
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
