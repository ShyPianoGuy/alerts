import type { FastifyReply, FastifyRequest } from "fastify";

export function handle(req: FastifyRequest, reply: FastifyReply) {
  console.log('Twitch route initialized');
}