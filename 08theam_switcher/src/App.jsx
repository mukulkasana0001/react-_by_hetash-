
import { useEffect, useState } from 'react'
import './App.css'
import { TheamProvider } from './context/theam'
import Button from './component/button'
import Card from './component/card'

function App() {

  const [theamMode, settheamMode] = useState("light")

  const Darktheam = () => {
    settheamMode('dark')
  }

  const Lighttheam =()=>{
    settheamMode('light')
  }


  useEffect(() => {
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(theamMode)
  }, [theamMode])

  return (

    <TheamProvider value={{theamMode, Darktheam, Lighttheam }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
           <Card/>
          </div>
        </div>
      </div>
    </TheamProvider>

  )
}

export default App
