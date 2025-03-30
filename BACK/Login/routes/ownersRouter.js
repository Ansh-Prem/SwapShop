const express = require('express') ;
const router = express . Router() ;
const ownerModel = require('../models/owner-model') ;

// I HAVE MADE A CHANGE HERE SO TAKE CARE ABOUT IT
// NOT ABLE TO RUN process.env.NODE_ENV
if( process.env.NODE_ENV === "development" )
    {
    
        router . post( "/create" , async function( req , res )
        {
            let owners = await ownerModel.find() ;

            if ( owners.length > 5 )
            {
                return res 
                        . status( 503 )
                        . send( "You don't have permission to create a new owner." ) ;
            }

            // THIS IS THE PART RELATED TO SCHEMA WE DEFINED EARLIER SO THERE MAY BE A NEED TO DO SOME CHANGES HERE
            
            let { fullname , email , password } = req . body ;
            
            let createdOwner = await ownerModel . create({

                fullname,
                email,
                password, 


            }) ;
            // TILL NOW WHATEVER THE CHANGE IS HERE 
            res . status( 201 ) . send( createdOwner ) ;
            // res . send( "Hello , ROCK ! " );
            // ownerModel.create() ;
        } ) ;
    
    }
    
//


// router . get( "/" , function( req , res ) {
//     res . send( "Hello , ROCK ! " );
// } ) ;

// if( process . env === "development")
// {
//     console . log( "HEY development" ) ;
// }

router . get( "/admin" , function( req , res )
{
    // res . send( "Hello , Admin ! " ) ;
    let SUCCESS = req . flash( "SUCCESS" ) ;
    res . render( "createproducts" , { SUCCESS } ) ;
}
 ) ;


// console . log( process . env . NODE_ENV ) ;


module . exports = router ;