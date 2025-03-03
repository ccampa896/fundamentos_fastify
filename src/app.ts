import { env } from './env';
import fastify from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { store } from './cache/session';
import { authRoutes } from './routes/auth.routes';
import { mealRoutes } from './routes/meal.routes';

export const app = fastify({ logger: true });

// Registra o plugin de cookies
app.register(cookie);

// Registra o plugin de sessão usando Redis
app.register(session, {
  secret: env.SECRET,
  store,
  cookie: {
    secure: false,
    httpOnly: true,
    path: '/',
    maxAge: 1000 * 60 * 60, // 1 hora
  },
  saveUninitialized: false,
});

app.register(authRoutes);
app.register(mealRoutes, {
  prefix: '/meals',
});
