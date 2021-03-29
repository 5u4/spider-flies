import * as fs from "fs";
import * as path from "path";

const pathToMain = path.join(
  __dirname,
  "../bin",
  "web",
  "Extensions",
  "P2P",
  "B_p2ptools.js"
);

const content = fs.readFileSync(pathToMain).toString();

const res = content.split(`peer = new Peer(peerConfig);`).join(
  `peer = new Peer(Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0"), peerConfig);`
);

fs.writeFileSync(pathToMain, res);
