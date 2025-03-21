// const { createServer } = require("http");
// const { default: next } = require("next");
import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";

const dev = true;
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    console.log(socket);
  });
  httpServer
    .once("error", (err) => {
      console.log(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
