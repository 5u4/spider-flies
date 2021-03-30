import * as fs from "fs";
import * as path from "path";

const pathToMain = path.join(__dirname, "../bin", "web", "code1.js");
const content = fs.readFileSync(pathToMain).toString();

const res = content
  .split(
    `gdjs.evtTools.p2p.useCustomBrokerServer("localhost", "9000", "/", "", false);`
  )
  .join(`gdjs.evtTools.p2p.useDefaultBrokerServer();`);

fs.writeFileSync(pathToMain, res);
