const mongoose = require('mongoose') ;
// mongoose . contact( "mongoose://127.0.0.1:27017/scratch" ) ;

const ownerSchema = mongoose . Schema( {

    fullname: String ,
    email: String ,
    password: String ,
    


    isadmin : Boolean ,
    


     contact : Number ,
     picture: String ,
     address : String ,
     Bio : { type: String , default:"" } ,
} ) ;

module . exports = mongoose . model( "owner" , ownerSchema ) ;