import React from 'react'
import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import User from './components/User/User.jsx'   //there is not any error
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'
// here we import routerProvider  from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />

        },
        {
          path: "about",
          element: <About />
        },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "github",
        element: <Github/>,
         loader : gitInfoLoader   //here syntex is different from below router
      },
      {
        path: "user/:userid",  //what is passes after colon is passes to the element(component) "user" by importing useparams

        element:<User/>
      }
    ]
    }
  ]
)


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route
//         loader={gitInfoLoader}
//         path='github'
//         element={<Github />}
//       />
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)




