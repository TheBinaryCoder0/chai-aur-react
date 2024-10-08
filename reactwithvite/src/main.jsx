import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

// SINCE App IS JUST A FUNCTION, SO WE CAN ALSO GIVE OUR OWN FUNCTION TO RENDER

function MyApp(){
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUsername = "bloodOfDragons"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUsername
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // <App/>

    // <> 
    //   <App/> 
    //   <MyApp/>
    // </>

    // MyApp() // AISA KARNA NAHI HAI KYOKI OPTIMIZATION MEIN DIKKAT AA JAATI HAI

    // ReactElement // AISE NAHI DE SAKTE KYOKI YAHA KUCH SYNTAX HAI PEHLE SE HI, JOH KI REACT NE BANAYA HAI

    // anotherElement // YHE CHAL JAYEGA (YEH OBJECT MEIN CONVERT HOGA, LEKIN DIRECT OBJECT AISE NAHI DE SAKTE, USKE PROPER SYNTAX MEIN HI DE SAKTE HAI)

    reactElement // YAHA SYNTAX WISE OBJECT PASS KAR DIYA TOH YEH CHALEGA
)
