import { PeerServer } from "peer";

const generateClientId = () =>
  Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
const peerServer = PeerServer({
  port: 9000,
  path: "/",
  generateClientId,
});
peerServer.on("connection", (c) => console.log(`${c.getId()} connected`));
peerServer.on("disconnect", (c) => console.log(`${c.getId()} disconnected`));
