export default {
  async fetch(request: Request, env: {}, ctx: ExecutionContext) {
    const res = await fetch("http://localhost:8080/workerd", {
      headers: {
        Upgrade: "websocket",
      },
    });
    res.webSocket!.accept();

    return new Response("Started the workerd client");
  },
};
