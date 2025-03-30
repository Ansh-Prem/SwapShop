import { useState ,useEffect,useRef } from "react";
import "./ProfileINFOpage.css";
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
    <div class="PAGE" >
    <h1 className="Profile-tag">Profile</h1>
    <div class="Profile" >
    
    <div id="Profile-picture"> </div>
    <div>
        <div id="Profile-Title"><h1 id="Profile-Name">Sparsh Rastogi</h1></div>
        
        </div>
    </div>
    <div id="Personal_INFO">
        <div id="Personal-Info-tag"><h1 id="Personal-Info-tag-title">Personal Information</h1></div>
            <div id="Personal-Info-Container">
                <div id="Email-container">
                    <div id="Email-container-icon"></div>
                    <div id="Email-container-Title&Value">
                        <h1 id="Email-container-Title">Email</h1>
                        <p id="Email-container-Value">premansh.rayzer@gmail.com</p>
                    </div>
                </div>
                <div id="Phone-container">
                    <div id="Phone-container-icon"></div>
                    <div id="Phone-container-Title&Value">
                        <h1 id="Phone-container-Title">Phone</h1>
                        <p id="Phone-container-Value">9341977395</p>
                    </div>
                </div>
                <div id="Location-container">
                    <div id="Location-container-icon"></div>
                    <div id="Location-container-Title&Value">
                        <h1 id="Location-container-Title">Location</h1>
                        <p id="Location-container-Value">Daulatpur</p>
                    </div>
                </div>
                <div id="MemberSince-container">
                    <div id="MemberSince-container-icon"></div>
                    <div id="MemberSince-container-Title&Value">
                        <h1 id="MemberSince-container-Title">MemeberSince</h1>
                        <p id="MemberSince-container-Value">2020</p>
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
            
        </div>
        <button id="Edit_Profile">Edit Profile</button>{"  "}
            <button id="Log_Out">Log Out</button>
    </div>
    </body>
  </center>
  </>
  )
}
export default App
