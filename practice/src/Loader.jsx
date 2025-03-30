import { useState ,useEffect,useRef } from "react";
import "./Loader.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Youtube from "./youtube"

function App() {
  
  const [Loader, setLoader] = useState(0);
  const [Loading, setLoading] = useState(false);
  // let counter = 0 ;

  // function Increment()
  // {
  //   setTimeout(()=>
  //   {setLoader( Loader + 1 ) 
  //   console.log(Loader)} , 1000 );
    
  // }
  useEffect(()=>
  {
    setInterval(()=>
    {
      setLoader( (Loader) => { const newLoader=(Loader + 1) ; if(newLoader >= 500){setLoading(true) } return newLoader ;}) 
      console.log(Loader);
      
    } , 100 );
    
  },[]) ;
  function Reset()
  {
    setLoader( 0 ) ;
    setLoading( false ) ;
    console.log(Loader);
    forceUpdate() ;
  }
  const [,forceUpdate]= useState( ) ;
  // 
  // useEffect(() => {
  //   console.log(`Loader is: ${Loader}`);
  // }, [Loader]);

  
  
  return (
    <>
    
  <center>
    <h1>ANSH PREM</h1>
    
    
    <button id="Incrementer" >Increment</button>
    {"  "}
    <button id="Decrementer" >Decrement</button>{" "}
    <br></br>
    <button id="Reset" onClick={Reset} >Reset</button>{" "}
    <br></br>
    <h1 className="waiting"  >Loader is: {Loader}</h1>
    
    {(Loading)?(<center><h1 className="waiting" >OK</h1><br></br></center>):(<center><h1 className="waiting" >Please Wait</h1><h1 className="waiting">Loading</h1></center>)}
    {/* Loading Bar */}
    <div className="loading-container">
        <div
          className="loading-bar"
          style={{
            width: `${(Loader / 500) * 100}%`, // Dynamically update width based on Loader value
          } }
          
          
        ></div>
      </div>

      <p className="loading-text" >
        {Loading ? "Loading Complete!" : `Progress: ${Math.floor((Loader / 500) * 100)}%`}
      </p>
  </center>
  </>
  )
}
export default App
