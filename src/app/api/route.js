// // const { createServer } = require("http");
// // const { default: next } = require("next");
// import { createServer } from "http";
// import { Server } from "socket.io";

// const dev = true;
// const hostname = "localhost";
// const port = 3000;
// const app = next({ dev, hostname, port });
// const handler = app.getRequestHandler();
// app.prepare().then(() => {
//   const httpServer = createServer(handler);
//   const io = new Server(httpServer);
//   io.on("connection", (socket) => {
//     console.log(socket);
//   });
//   httpServer
//     .once("error", (err) => {
//       console.log(err);
//       process.exit(1);
//     })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`);
//     });
// });
const jwt = require("jsonwebtoken");
const secretkey = "sompal@qwerty07/02/22";
const token = jwt.sign(
  {
    id: 1,
    username: "GFG",
  },
  secretkey,
  { expiresIn: "1h" }
);

jwt.verify(token, "sompal@qwerty07/02/22", (err, decoded) => {
  if (err) {
    console.log("Token is invalid");
  } else {
    console.log("Decode Token:", decoded);
  }
});
