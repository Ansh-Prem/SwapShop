import { useState ,useEffect,useRef } from "react";
import "./ProductPage.css";
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
  {/* <SearchBar></SearchBar> */}
  
    <body>
    <div class="Product" >
        <center><h1>Product</h1></center>
        <div class="Product-TitleBar" >
            <h2 class="Product-title" >Jimson Mathew</h2>
            <h2 class="Product-Price">Price : ₹69</h2>
        </div>
        
        <div class="Product-parent"> 
            <div class="Product-image"></div> 
            <div class="Product-info">
                <div class="Product-description"><h2>Jimson bulaye gaand chudwaye sirf 70 rupaye me</h2> <p>Dr. Jimson Mathew is a distinguished academic with a Ph.D. in Computer Science, recognized for expertise across a broad spectrum of the field. With an impressive record of achievements, including clearance of Google Scholar, he stands as a thought leader in topics ranging from algorithms and artificial intelligence to data science and software engineering. Currently serving as a faculty member at IIT Patna, his research contributions and extensive knowledge make him a valuable asset to both the academic and professional tech communities. His interdisciplinary approach has made him a mentor and advisor to numerous aspiring scholars, driving innovation and excellence in every project he undertakes.</p> </div>    
                <div class="Product-description-button"><button class="Product-description-buttonL">L</button><button class="Product-description-buttonR">R</button></div>
            </div>
        </div>

        
    </div>
    <div class="Product-Status-Stats" >
            <div id="Product-Status-icon"></div>
            <h3 id="Product-Status">Status</h3>
            <div><h2 class="Product-Status-Container" >ItemStatus</h2></div>
            <h4 id="Product-Status-availability">Available for purchase</h4>
    </div>
    
    <div id="More-Details" >
        <h1 id="More-Details-Specifications">Specifications</h1>
    </div>
    <div id="Owner-Details" >
        <div id="Owner-Name"><h1>ANSH PREM</h1><p>lorem</p></div>
        <div id="Owner-Contact"><h1>123456789</h1><p>lorem</p></div>
        <div id="Owner-Locations"><h1>ARYABHATTA-A406</h1><p>lorem</p></div>
    </div>

    <div id="More-Similiar-Items" >
        <h2>More Similar ITEMS</h2>
        <div id="Similar-Items-Tiles">
    <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div> <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images"></div></div> </div>
  <div class="tile"> <div id="RecentProduct1"><h1 id="ProductName1">Sparsh</h1><h3>Price:$66</h3> <button class="Details">View Details</button> </div>  <div class="parent"><div class="images"></div></div> </div>
  </div>
    </div>

    </body>
  </center>
  </>
  )
}
export default App
