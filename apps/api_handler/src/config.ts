import 'dotenv/config';

export const config = {
  secretKey: process.env.SECRET_KEY,
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};
