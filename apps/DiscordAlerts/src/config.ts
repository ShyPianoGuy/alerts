import 'dotenv/config';

export default {
  botToken: process.env.DISCORD_BOT_TOKEN,
  botId: process.env.DISCORD_BOT_ID,
  botSecret: process.env.DISCORD_BOT_SECRET,
  botPublic: process.env.DISCORD_BOT_PUBLIC_KEY,
  ownerId: process.env.DISCORD_BOT_OWNER_ID,
};