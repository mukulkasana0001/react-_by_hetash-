
import Login from "./Components/Login"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./Components/Profile.jsx"



function App() {


  return (
    <UserContextProvider>
     <h1> react</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  ) 
}

export default App



// 40:00
