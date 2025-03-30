import { useState ,useEffect,useRef } from "react";
import "./App.css";
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
        <button id="Profile-Button">@</button>
  </div>
  {/* <SearchBar></SearchBar> */}
  
    <body>
    <h1 className="Upload-Item-container">Upload New Item</h1>
    <div class="PAGE" >
        <div id="Item-Details-container">
                <div id="Item-Details-container-Title">
                    <h1 id="Item-Details-container-Title-Value">Item Details</h1>
                </div>


                <div id="Item-Name-container">
                    <h1 id="Item-Name-container-Title">Item Name</h1>
                    {/* <div id="Item-Name-Value-container">
                        <h1 id="Item-Name-container-Value" >JIMSON</h1>
                    </div> */}
                    <input type="text" id="Item-Name-Value-container"></input>
                </div>
                <div id="Price-container">
                    <h1 id="Price-container-Title">Price ( ₹ )</h1>
                    {/* <div id="Price-Value-container"> */}
                    <input type="text" id="Price-Value-container"></input>
                        {/* <h1 id="Price-container-Value" >69</h1> */}
                    {/* </div> */}
                </div>
                
                <div id="Category-container">
                    <h1 id="Category-container-Title">Category</h1>
                    {/* <div id="Category-Value-container"> */}
                    <input type="text" id="Category-Value-container"></input>
                        {/* <h1 id="Category-container-Value" >Chutiya</h1> */}
                    {/* </div> */}
                </div>

                <div id="Description-container">
                    <h1 id="Description-container-Title">Description</h1>
                    {/* <div id="Description-Value-container">
                        <h2 id="Description-container-Value" ><p>Lorem ipsum dolor sit amet consectetur adipi
                            sicing elit. Ab et ducimus inventore, fuga aliquam sapiente tempora volupta
                            te a hic quos? Deserunt perspiciatis iste beatae. Voluptas est in labore delectus quo.</p></h2>
                    </div> */}
                    <textarea type="text" id="Description-Value-container"/>
                    
                </div>
                
        </div>

        <div id="Image-Browse-parent-container">
                
                <h1 id="Image-Browse-container-Title">Images</h1>
                <div id="Image-Browse-container">
                        <div id="Image-Browse-container-icon"></div>
                        <h2 id="Image-Browse-container-Value" >Upload Images</h2>
                        <h2 id="Image-Browse-container-Value-Statement">
                            Drag and drop files 
                            here or click to browse. 
                            Maximum 5 images, 5MB each.
                        </h2>
                        <button id="Image-Browse-container-Button">Browse Files</button>
                </div>
                
        </div>

        
    </div>
    
        
    </body>
  </center>
  </>
  )
}
export default App
