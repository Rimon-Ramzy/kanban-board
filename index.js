
const { Server } = require('socket.io');
// const cors = require('cors');

const io = new Server({ cors: { origin: "http://localhost:4200" } });
// const io = new Server({ cors: { origin: "https://6630a5dee579b2a6165e95cf--melodious-brigadeiros-b776ed.netlify.app" } });

// const io = new Server({
//   cors: {
//     origin: "http://localhost:4200", // Allow requests from this origin
//     methods: ["GET", "POST"] // Allow only these methods
//   }
// });

// io.use(cors());

io.on("connection", (socket) => {
  console.log("Connected");
  // setInterval(() => {
  //   socket.emit("new-email", { sender: "Server", message: faker.git.commitMessage() })
  // }, 5000);
  socket.on('send-event', notification => {
    console.log(notification);
    socket.broadcast.emit("new-notification", notification);
  })
})

io.listen(3000);



// const express = require('express');
// const http = require('http');
// // const socketIo = require('socket.io');

// const { Server } = require('socket.io');

// const io = new Server({ cors: { origin: "http://localhost:4200" } });

// const app = express();
// const server = http.createServer(app);
// // const io = socketIo(server);

// io.on("connection", (socket) => {
//   console.log("Connected");
//   socket.on('send-event', notification => {
//     console.log(notification);
//     socket.broadcast.emit("new-notification", notification);
//   })
// })


// // io.listen(3000);
// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
