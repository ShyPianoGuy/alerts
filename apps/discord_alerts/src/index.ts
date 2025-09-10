import config from './config';
import { Server } from "./server";

export class Client {
  server = new Server();
  config = config
}

new Client();