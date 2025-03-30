const express = require('express') ;
const app = express() ;

const cookieParser = require('cookie-parser') ;
const path = require('path') ;

const expressionSession = require('express-session') ;
const flash = require('connect-flash') ;
 
const ownerModel = require('./models/owner-model');

const db = require('./config/mongoose-connection') ;

const ownersRouter = require('./routes/ownersRouter') ;
const productsRouter = require('./routes/productsRouter') ;
const usersRouter = require('./routes/usersRouter') ;
const indexRouter = require('./routes/index') ;


require('dotenv') . config() ;

app . use( express . json( ) ) ;
app . use( express . urlencoded( { extended: true } ) ) ;
app . use( cookieParser( ) ) ;

app . use( expressionSession({
    secret: process.env.EXPRESS_SESSION_SECRET || 'fallback-secret-key',
    resave: false,
    saveUninitialized: false,
}) ) ;

app . use( flash( ) ) ;
app . use( express . static( path . join(__dirname , "public") ) ) ;
app . set( "view engine","ejs" ) ;

// // Set up the session middleware
// app.use(expressionSession({
//     secret: 'your-secret-key',  // Replace with a strong secret key
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }  // Set to true if using HTTPS
//   }));


// Cause I have change this part so take care about it
app . use( "/" , indexRouter )
app . use( "/owners" , ownersRouter ) ;
app . use( "/users" , usersRouter ) ;
app . use( "/products" , productsRouter ) ;

// Till this part

// app . get( "/" , ( req , res ) => {
//     res . send( "hey" ) ;
// } 

// ) ;




app.listen(3000, () => {
    console.log('Server running on port 3000');
});