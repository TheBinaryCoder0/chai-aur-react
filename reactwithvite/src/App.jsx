import Chai from "./chai"

function App() {
  const username = "theBinaryCoder"
  // VARIABLES INJECT KARNE KE LIYE CURLY BRACES KA USE KARO => {}
  return (
    <>
    <Chai/>
    <h1>Aman Shahi {username}</h1> 
    <p>Rajat Shahi</p>
    </>
  )
  // HERE {username} IS EVALUATED EXPRESSION, 
  //MATLAB HAM YAHA JS NAHI LIKHTE HAI PURI, JS KA FINAL OUTCOME JOH EVALUATE HO GAYA HAI, WOH LIKHTE HO
  // return KE BAHAR LIKH SAKTE HAI JS
  
  // ISLIYE LIKH NAHI SAKTE KYOKI WOH AT THE END OBJECT MEIN CONVERT HO RAHA HAI, 
  // AUR OBJECT KE AND KEWAL KEY-VALUE PAIRS HI TOH LIKH SAKTE HAI
}

export default App
