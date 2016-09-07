// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Chatroom

var numUsers = 0;
var rooms=[];

function searchInArrayByProperty(array,prop,value){
    
    return array.filter(function(obj){
                    console.log(obj[prop]);
                      if (obj[prop]===value)
                      {
                       return true;
                      }    
                      return false;
                    })[0];
}

function existeFiesta(nameKey){
    
    var fiesta=rooms.filter(function(obj){
      if (obj.name===nameKey)
      {
       return true;
      }    
      return false;
    });
    
    if (fiesta.length===0){
        return false;
    }else
    {
        return fiesta[0];
    }
}

function Fiesta(name){
    this.name=name;
    this.connectedUsers=0;
    this.users=[];
}

function FiestaUser(username, email, deviceID){
    this.name_to_display=username;
    this.email=email;
    this.deviceID=deviceID;
}

io.on('connection', function (socket) {
  var addedUser = false;
  var fiestauser;

    // when the client emits 'new message', this listens and executes
  socket.on('send message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.to(socket.room).emit('send message', {
      username: socket.username,
      message: data
    });
  });
  
  // when the client emits 'send song ', this listens and executes
  socket.on('send song', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.to(socket.room).emit('send song', {
      username: socket.username,
      song: data
    });
  });
  
  // when the client emits 'send sticker', this listens and executes
  socket.on('send sticker', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.to(socket.room).emit('send sticker', {
      username: socket.username,
      urlSticker: data
    });
  });
  
  // when the client emits 'send score', this listens and executes
  socket.on('send score', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.to(socket.room).emit('send score', {
      username: socket.username,
      score: data
    });
  });
  
  // when the TV send 'time to send score', this listens and executes
  socket.on('time to send score', function () {
    // we tell the client to execute 'new message'
    socket.broadcast.to(socket.room).emit('time to send score');
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (data) {
    if (addedUser) return;
    
    var username=data.name_to_display;
    var room=data.roomID;
    if (!existeFiesta(room))
    {
        fiestauser=new Fiesta(room);
        rooms.push(fiestauser);
    }else
    {
        fiestauser=existeFiesta(room);
    }
    socket.room=room;
    socket.join(socket.room);
    fiestauser.users.push(new FiestaUser(username,data.email,data.deviceID));
    ++fiestauser.connectedUsers;
    console.log("alentrer",fiestauser.users);
    

    // we store the username in the socket session for this client
    socket.username = username;
    socket.email = data.email;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers,
      fiestaUsers:fiestauser.connectedUsers,
      users:fiestauser.users,
      loggedin: true
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.to(socket.room).emit('user joined', {
      username: socket.username,
      email: socket.email,
      room:room,
      numUsers: numUsers,
      fiestaUsers:fiestauser.connectedUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;
      --fiestauser.connectedUsers;
      fiestauser.users.splice(fiestauser.users.indexOf(searchInArrayByProperty(fiestauser.users,'email',socket.username)),1);
      if (fiestauser.connectedUsers<=0)
      {
            rooms.splice(rooms.indexOf(fiestauser),1);
      }
       console.log("al salir",fiestauser.users);
      // echo globally that this client has left
      socket.broadcast.to(socket.room).emit('user left', {
        username: socket.username,
        email: socket.email,
        numUsers: numUsers,
        users:fiestauser.users,
        fiestaUsers:fiestauser.connectedUsers
      });
    }
  });
});
