import { useState, useCallback ,useEffect, useRef} from 'react'



function App() {

  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  // useRef hook
  const passwordreference =useRef(null)
  // below we use useCallback hook
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxuz";

    if (numallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*()_+=[]{}~`";
    }

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numallowed, charallowed, setpassword])

  const copypasswordtoclipbord = useCallback(()=>{
    passwordreference.current?.select(password)   //this is only for creating effect
    passwordreference.current?.setSelectionRange(0,100)      //this is for creating a effect on selected text

    window.navigator.clipboard.writeText(password)   //we copy text by this <---
  },[password])

  // there is no need to store useEffect in a variable
  useEffect(()=>{
    passwordgenerator()
  },[length,numallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-center text-orange-500"> <h2 className='text-red-500'>Password Generator</h2>
        <div className='  flex shadow rounded-lg overflow-hidden mb-4  '>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='password'
            readOnly
            ref={passwordreference}
          />
          <button onClick={copypasswordtoclipbord} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}

            />
            <label  >length {length}</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={setnumallowed}
              id="numberInput"
              onChange={() => {
                setnumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characerInput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="characerInput">Character</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App





