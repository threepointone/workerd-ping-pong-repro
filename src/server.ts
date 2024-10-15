import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const payload = "the ping payload";

wss.on("connection", (ws: WebSocket, message: IncomingMessage) => {
  console.log("New connection", message.url);

  ws.on("pong", (data) => {
    console.log(
      "pong from",
      message.url?.slice(1),
      `payload: ${data.toString()}`
    );
  });

  const pingInterval = setInterval(() => {
    ws.ping(Buffer.from(payload));
  }, 2000);

  ws.on("close", () => {
    clearInterval(pingInterval);
  });
});
