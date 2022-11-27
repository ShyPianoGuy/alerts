import { Server } from "./server";

export class Client {
  server: Server;

  constructor() {
    this.server = new Server();
  }
}

new Client();