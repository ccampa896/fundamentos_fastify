import { RedisStore } from 'connect-redis';
import { createClient } from 'redis';
import { env } from '../env';

// Cria o cliente Redis
const redisClient = createClient({
  url: env.REDIS_URL,
});

redisClient.connect().catch(console.error);
redisClient.on('error', err => console.error('Error on Redis:', err));

// Cria a instância do RedisStore
export const store = new RedisStore({
  client: redisClient,
  ttl: 60 * 60, // 1 hora
});
