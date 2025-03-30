const mongoose = require('mongoose') ;
const dbgr = require('debug')( "development:mongoose" ) ;
const config = require('config') ;

mongoose 
 . connect( `${config.get("MONGODB_URI")}/scatch` 
//  ,{ useNewUrlParser: true, useUnifiedTopology: true} 
) 
. then( ( )=> { dbgr( "connected" ) ; console . log( "CONNECTED" ) ; } )
. catch( ( err ) => { dbgr( "There is an error\n" , err ) ; } )


mongoose . exports = mongoose . connection ;