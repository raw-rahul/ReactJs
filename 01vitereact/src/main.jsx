import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <h1>Chat and code!</h1>
  )
}

// const reactElemet = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google!'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser  = "Chat aur react"

const reactElemet  = React.createElement(
  'a',
  {
    href: 'https://google.com',
     target: '_blank'
  },

  'click me to visit google',
  anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyApp/> */}
    {/* {anotherElement} */}
    {reactElemet}
  </React.StrictMode>,
)
