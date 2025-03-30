import { useState ,useEffect,useRef } from "react";
import "./ProfileSettingPage.css";
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
    <h1 className="Edit_Profile-tag">Edit Profile</h1>
    <div class="Profile" >
    
    <div id="Profile-picture"></div>
    <div>
        <div id="Profile-Edit-container">
            <button id="Edit-Profile-button"> Change Photo </button>
        </div>
        
    </div>
    </div>
    <div id="Personal_INFO">
        <div id="Personal-Info-tag"><h1 id="Personal-Info-tag-title">Personal Information</h1></div>
            <div id="Personal-Info-Container">
                <div id="FullName-container">
                    <div id="FullName-container-Title-Value">
                        <h1 id="FullName-container-Title">Full Name</h1>
                        <div id="FullName-container-Value_icon">
                            <h1 id="FullName-container-Value">ANSH PREM</h1>
                            <button id="FullName-container_icon">
                            </button>
                        </div>
                    </div>
                </div>
                
                <div id="Email-container">
                    <div id="Email-container-Title-Value">
                        <h1 id="Email-container-Title">Email</h1>
                        <div id="Email-container-Value_icon">
                            <h1 id="Email-container-Value">premansh@gmail.com</h1>
                            <button id="Email-container_icon">
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div id="Phone-container">
                    <div id="Phone-container-Title-Value">
                        <h1 id="Phone-container-Title">Phone</h1>
                        <div id="Phone-container-Value_icon">
                            <h1 id="Phone-container-Value">+9341977395</h1>
                            <button id="Phone-container_icon">
                            </button>
                        </div>
                    </div>
                </div>
                <div id="Location-container">
                    <div id="Location-container-Title-Value">
                        <h1 id="Location-container-Title">Location</h1>
                            <div id="Location-container-Value_icon">
                            <h1 id="Location-container-Value">Daulatpur</h1>
                            <button id="Location-container_icon">
                            </button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
        <div id="Account_Settings_container" >
            <h1 id="Account_Settings_container_Title">Account Settings</h1>

            <div id="Notifications-container">
                <div id="Notifications-container-icon"></div>
                    <div id="Notifications_container_Title_Value">
                        <h1 id="Notifications-container-Title">Notifications</h1>
                        <p id="Notifications-container-Value">Email and Push Notifications</p>
                    </div>
                </div>
                <div id="Privacy_Settings-container">
                <div id="Privacy_Settings-container-icon"></div>
                    <div id="Privacy_Settings-container-Title_Value">
                        <h1 id="Privacy_Settings-container-Title">Privacy Settings</h1>
                        <p id="Privacy_Settings-container-Value">Manage who can see your Profile</p>
                    </div>
                </div>
                <button id="Edit_Profile">Edit Profile</button>
                <button id="Log_Out">Log Out</button>
            </div>
        
            <div id="Bio_container" >
                <div id="Bio_container_Title_Parent">
                    <h1 id="Bio-container_Title">Bio</h1>
                </div>

                <div id="Bio-container-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        labore laborum nobis odit 
                    maxime illo explicabo praesentium tempore ratione corporis?
                     Aliquid nulla consectetur odio 
                    impedit unde iusto adipisci delectus totam.</p>
                </div>
                
            </div>
        
    </body>
  </center>
  </>
  )
}
export default App
