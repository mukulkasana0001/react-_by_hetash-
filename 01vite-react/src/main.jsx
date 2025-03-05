import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     <App />
 
//   )









  // **** ABOUT render
  //        React renders HTML to the web page by using a function 
  //        called createRoot() and its method render().



  //  BELOW CODE IS OF NEXT VIDEO



  function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
  

// ** we cannot use below code because react does not understant this type of object

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


// we can use variables at last directly  
const anotherUser = "chai aur react"


// *** react use this type of object (it transfer the function return into this type of object  using  this method --> React.createElement )
const reactElement = React.createElement(
    'a',                                                   //type
    {href: 'https://google.com',target: '_blank' },        //key
    'click me to visit google',                            //ref
    anotherElement       //here we use variables at last    (props)
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)