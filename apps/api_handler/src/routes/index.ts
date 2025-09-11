import { handle as twitchHandler } from './twitch';
import { handle as youtubeHandler } from './youtube';
import { handle as xHandler } from './x';
import type { FastifyInstance } from 'fastify';

export function initializeRoutes(app: FastifyInstance) {
  app.get('/twitch', (req, reply) => twitchHandler(req, reply));
  app.get('/youtube', (req, reply) => youtubeHandler(req, reply));
  app.get('/x', (req, reply) => xHandler(req, reply));
}
