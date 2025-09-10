import { InteractionHandler } from "./interaction-handler";

export class Server {
  interactionHandler: InteractionHandler;

  constructor() {
    this.interactionHandler = new InteractionHandler();
  }
}