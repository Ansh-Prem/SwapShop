const cookieParser = require('cookie-parser');
const express = require('express') ;
const app = express() ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;


app . use( cookieParser() ) ;

app . get( "/" , function (req , res  ) 
{
    // res . cookie( "name" , "ansh" ) ;
    // res . send( "Hello , Ansh" ) ;

    // bcrypt . genSalt( 10 , function( err , salt ){
    //     bcrypt . hash( "PASSWORD" , salt , function( err , hash ) {
    //         // Store the hash in your password DB.
    //         console . log( hash );
    //     } ) ;
    // } ) ;

    let token = jwt . sign( { email:"premansh.rayzer@gmail.com" } , "secret" )
    res . cookie( "token" , token ) ;
    res . send( "done" ) ; 
    console . log( token ) ;
}
)

app . get( "/read" , function( req , res ) {
    let data = jwt . verify( req . cookies . token , "secret" ) ;
    console . log( req . cookies . token ) ;
    res . end( " token " ) ;
} )

// app . get( "/read" , function (req , res  ) 
// {
//     res . cookie( "name" , "ansh" ) ;
//     console . log ( req . cookies ) ;
//     res . send( "Hello , Ansh" ) ;
// }
// )

app . listen( 3000 ) ;
