const express = require('express') ;
const router = express . Router() ;

const { registerUser, loginUser ,  logout } = require('../controllers/authController') ;

router . get( "/" , function( req , res ) {
    res . send( "Hello , ROCK ! " );
} ) ;

// THIS IS THE PART RELATED TO SCHEMA WE DEFINED EARLIER SO THERE MAY BE A NEED TO DO SOME CHANGES HERE
router . post( "/register" , 
    registerUser
) ;

router . post( "/login" ,
    loginUser
 ) ;

router . get( "/logout" , logout ) ;


module . exports = router ;