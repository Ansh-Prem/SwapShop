import { useState ,useEffect,useRef } from "react";
import "./Homepage.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from './Searchbar.jsx' ;

function App() {
  return (
    <>
  <center>
  
  
  <div class="headline" > 
  <button id="SwapShop">SwapShop</button>  
  <button id="Home">Home</button>
  <button id="Categories">Categories</button>
  <button id="WhiteSpace">WhiteSpace</button>
  <button id="UploadItems">UploadItems</button>
  <button id="Profile">@</button>
  </div>
  <SearchBar></SearchBar>

  <h2>Recently Added</h2>
    <body>
      <div class="Recent">
    <div class="content1" >
	<div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div> <div class="parent"><div class="images1"></div> </div> </div>	
	<div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div> <div class="parent"><div class="images1"></div></div> </div>	
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images1"></div></div> </div>	
    </div>	
    <div class="content1" >
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Jimson</h1><h3>Price:$69</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images2"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Jimson</h1><h3>Price:$69</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images2"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Jimmy</h1><h3>Price:$69</h3>  <button class="Details">View Details</button> </div>  <div class="parent"><div class="images2"></div></div> </div>
  </div>
  <div class="content1" >
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div> <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images"></div></div> </div>
  </div>

  </div>

  <h2>Popular Items</h2>
  <div class="Popular">
  <div class="content1" >
    
	<div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>	
	<div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
    </div>	
    <div class="content1" >
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  </div>
  <div class="content1" >
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3><button class="Details">View Details</button></div>  <div class="parent"><div class="images"></div></div> </div>
  </div>
  </div>
  
  </body>
  </center>
  </>
  )
}
export default App
