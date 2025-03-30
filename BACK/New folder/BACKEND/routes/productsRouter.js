const express = require('express') ;
const router = express . Router() ;
const upload = require( '../config/multer-config' ) ;

const productModel = require( '../models/product-model' ) ;

// router . get( "/" , function( req , res ) {
//     // res . send( "Hello , ROCK ! " );
// } ) ;

router . post( "/create" , upload . single("image") , async function( req , res)
{
    // res . send( "Hue" ) ;
    // res . send( req.file ) ;

    try {
    // This is the part related to schema so  take care about the char here i have made
    let { name , price , discount , description , bgcolor , panelcolor , textcolor } = req . body ;
    
    
    //
    let product = await productModel . create( {
        image: req.file.buffer ,
        name , 
        price ,
        discount ,
        description ,
        bgcolor ,
        panelcolor ,
        textcolor ,
    } 
    ) ;

    // HERE ALL THE CHANGES ARE TO BE MADE
    // res . send( product ) ;

    req . flash( "SUCCESS" , "Product created successfully" ) ;
    res . redirect( "/owners/admin" ) ;
    }
    catch( err )
    {
        res . send( err . message ) ;
    }
} 
) ;

module . exports = router ;

// PRODUCT SCHEMA
// image: Buffer,
//   name: String,
//   price: Number,
//   discount: {
//     type: Number,
//     default: 0,
//   },
//   description: {
//     type: String,
//     default: "",
//   },
//   bgcolor: {
//     type: String,
//     default: "purple",
//   },
//   owner: {
//     type: Object,
//     properties: {
//       owner_id: { type: String },
//       owner_name: { type: String },
//     },
//     default: {},
//   },