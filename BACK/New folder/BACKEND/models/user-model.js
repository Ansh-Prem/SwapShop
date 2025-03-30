const mongoose = require('mongoose') ;

// mongoose . contact( "mongoose://127.0.0.1:27017/scratch" ) ;

const userSchema = mongoose . Schema( {

    fullname: String ,
    email: String ,
    password: String ,
    cart : [{ 
        type: mongoose.Schema.Types.ObjectId ,
        ref:"product",
     } ],
     // isadmin : Boolean ,
     orders : {
        type: Array ,
        default: []
     } ,
     uploaded_products : [{ 
      type: mongoose.Schema.Types.ObjectId ,
      ref:"product",
   } ],
     contact : Number ,
     picture: String ,
     address : String ,
     // gstin:String ,
     Bio : { type: String , default:"" } ,
} ) ;

module . exports = mongoose . model( "user" , userSchema ) ;