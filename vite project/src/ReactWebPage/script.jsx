import Header1 from "./Header.js"
import Main from "./Main.js"
import Footer1 from "./Footer.js"
// import React from "react"
import  ReactDOM  from "react-dom"
function App() {
   return (
   <div>
<Header1/> 

       <Main/>

    <Footer1/>  
   </div>
   
   )   
   
}

ReactDOM.render(<App/>,document.getElementById("root"))