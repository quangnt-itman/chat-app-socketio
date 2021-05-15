
const path = require( 'path' );
const express = require( 'express' );

const http = require( 'http' );
const socketIO = require( 'socket.io' );

const publicPath = path.join( __dirname, '../public' );
const port = process.env.PORT || 3000;

const app = express();

const server = http.createServer( app );
const io = socketIO( server );

// todo: start coding here
io.on( 'connection', ( socket ) => {
  console.log( 'new user connection' );
  socket.on( 'disconnect', () => {
    console.log( 'user disconnected' );
  } );
} );
// * end

app.use( express.static( publicPath ) );

server.listen( port, () => {
  console.log( `server is running on http://localhost:${ port }` );
} );
// app.listen( port, () => {
//   console.log( `server is running on http://localhost:${ port }` );
// } );
