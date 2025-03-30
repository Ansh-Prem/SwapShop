import { useState ,useEffect,useRef } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Youtube from "./youtube"

function App() {
  
//   const [counter, setCount] = useState(0);
//   // let counter = 0 ;

//   function Increment()
//   {
//     setCount( counter + 1 ) ;
//     console.log(counter) ;
    
//   }
//   function Decrement()
//   {
//     setCount( counter - 1 ) ;
//     console.log(counter);
    
//   }
//   function Reset()
//   {
//     setCount( 0 ) ;
//     console.log(counter);
    
//   }
//   // const [,forceUpdate]= useState( ) ;
//   // 
//   useEffect(() => {
//     console.log(`Counter is: ${counter}`);
//   }, [counter]);

  
  
  return (
    <>
  <center>
    <h1>ANSH PREM</h1>
    <button id="Incrementer" onClick={Increment} >Increment</button>
    {"  "}
    <button id="Decrementer" onClick={Decrement} >Decrement</button>{" "}
    <br></br>
    <button id="Reset" onClick={Reset} >Reset</button>{" "}
    <br></br>
    <p>Counter : {counter}</p>
  </center>
  </>
  )
}
export default App
