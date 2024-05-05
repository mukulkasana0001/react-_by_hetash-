import { useState } from 'react'



function App() {
  const [color, setcolor] = useState("olive")
  return (

    <div className="w-full h-screen duration-200"
    // changes is prpogate below backgroundColor 
      style={{ backgroundColor: color }} >
      <div className='fixed flex flex-wrap  justify-center bottom-20 inset-x-0 px-2   ' >
        <div className='fixed flex flex-wrap  justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl ' >
          <button onClick={ ()=> setcolor('red')} className='outline-none px-4 py-2 rounded-full  text-white shadow-lg  ' 
          style={{ backgroundColor: 'red'}} >red</button>
        

          <button onClick={ ()=> setcolor('green')} className='outline-none px-4 py-2 rounded-full  text-white shadow-lg  ' 
          style={{ backgroundColor: 'green'}} >green</button>

          <button onClick={ ()=> setcolor('grey')}  className='outline-none px-4 py-2 rounded-full  text-white shadow-lg  ' 
          style={{ backgroundColor: 'grey'}} >grey</button>

          <button onClick={ ()=> setcolor('blue')}  className='outline-none px-4 py-2 rounded-full  text-white shadow-lg  ' 
          style={{ backgroundColor: 'blue '}} > blue </button>

          <button onClick={ ()=> setcolor('orange')}  className='outline-none px-4 py-2 rounded-full  text-white shadow-lg  ' 
          style={{ backgroundColor: 'orange '}} > orange </button>
</div>  
    </div>
    </div>

  )
}

export default App
