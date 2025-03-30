import { useState ,useEffect,useRef } from "react";
import "./Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // Define states for form fields (optional)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { username, email, password });
  };
  
  return (
    <>
  <center>
    {/* <h1>ANSH PREM</h1>
    <button id="Login" >Login</button>{"  "}
    <button id="Signin" >Signin</button> */}
    <body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"></input>
    <div className="signup">
        <form onSubmit={handleSubmit}>
        <label for="chk" aria-hidden="true">Sign up</label>
          <label htmlFor="username"></label>
          <input type="text" id="username" name="txt" placeholder="User name" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

          
          <label htmlFor="password"></label>
          <input type="password" id="password" name="pswd" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

          <button type="submit">Sign up</button>
          </form>

    </div>
    <div className="login">
    
      
        <form onSubmit={handleSubmit}>
          <label for="chk" aria-hidden="true">Login</label>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

          
          <label htmlFor="password"></label>
          <input type="password" id="password" name="pswd" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

          <button type="submit">Login</button>
          </form>

    </div>
    </div>
  </body>
  </center>
  </>
  )
}
export default App
