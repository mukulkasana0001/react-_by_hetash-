import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './camponent/card'

function App() {
  let myobj = {
    name :'mukul',
    age: 12
  }

  let arr =[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 ' >Talvind Test</h1>
      
      <Card channel= 'chai or code'  btntext='click me' someobj ={arr} />
      {/* whatever we pass into the card it show on card props */}
      <Card  channel='youtube' btntext='visit me' />
    </>
  )
}

export default App
