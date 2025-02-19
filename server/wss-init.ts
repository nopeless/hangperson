import { WebSocketServer } from "ws";

export default function (server: any) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", function connection(ws: any) {
    ws.on("message", function incoming(message: string) {
      console.log("received: %s", message);
    });

    ws.send("something");
  });
}
