
import Chai from './Chai.jsx'



//**** how to use variable

function App() {
  const username = "chai aur code"       // for use variables we have t write evaluated expression

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}



// *** AFTER CREATING chai.jsx file 

// function App() {
//   return (
//     <>
//   <Chai/>
//   <h1> we can only return a single element </h1>
//   <p>so here we use a single fragment like this  ("<> </>")</p>
//   </>
//   )
//  }


// **** below code is  before creating Chai.js file

// function App() {
//   return (
//    <h1>BY  hitesh react with vite | mukul</h1>
//   )
// }

export default App ;
