import fastify from 'fastify';
import { config } from './config';
import { initializeRoutes } from './routes';

export class ApiHandler {
  private app = fastify();

  constructor() {
    initializeRoutes(this.app);
  }

  public async start() {
    try {
      await this.app.listen({ port: config.port });
    } catch (err) {
      console.log(err);
    }
  }
}

new ApiHandler().start();
