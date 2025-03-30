const express = require('express') ;
const router = express . Router() ;
const isloggedin = require('../middlewares/isLoggedin') ;
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');



router . get( "/" , 
    function( req , res )
    {
        let error  = req . flash( "error" ) ;  
        res . render("index" , {error , loggedin:false}) ; 
    } 
) ;

router . get( "/shop" , isloggedin , async function( req, res )
    {
        let products = await productModel.find() ;
        let SUCCESS = req . flash( "SUCCESS" ) ;
        res . render( "shop" , {products, SUCCESS } ) ;
    }    
) ;

router . get( "/cart" , isloggedin , async function( req, res )
    {
        let user = await userModel 
            . findOne( { email : req . user . email } ) 
            . populate( "cart" ) ;

            //No need the discount
            const bill = ( Number( user . cart[0] . price )+ 20 - Number(user . cart[0] . discount) ) ;

            // console . log( user . cart ) ;
        
        res . render( "cart" , {user, bill} ) ;
    }    
) ;

router . get( "/addtocart/:productid" , isloggedin , async function( req, res )
    {
        let user = await userModel.findOne({ email: req.user.email }) ;
        user . cart . push(req . params . productid) ;
        await user . save( ) ;
        req . flash( "SUCCESS" , "Added to cart" ) ;
        res . redirect( "/shop" ) ;
    }    
) ;


router . get( "/logout" , isloggedin , async function( req, res )
    {
        res . render( "shop" ) ;
    }     
) ;


// app.get('/shop', (req, res) => {
//     const products = [ /* Array of product objects */ ];
    
//     res.render('shop', { products: products });
// });

module . exports = router ;
