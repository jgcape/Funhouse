let express = require("express");
let app = express();

let http = require('http').createServer(app);
let io = require('socket.io')(http);

// Routes for subscribers mailing list
let subscribersRoute = require('./routes/subscribers')


var port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/subscribers', subscribersRoute)


//Setting up socket and emitting alternating headshot images every second.

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
 
  var picture = "assets/julian.jpg"
  setInterval(() => {    
    if (picture == "assets/julian.jpg") {
      picture = "assets/julian2.jpg"
    }
    else picture = "assets/julian.jpg"

    socket.emit('new_picture', picture);
  }, 1000);
});


http.listen(port, () => {
  console.log("Listening on port ", port);
});

