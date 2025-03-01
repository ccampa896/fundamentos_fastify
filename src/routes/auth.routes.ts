import { FastifyInstance } from 'fastify';
import { AuthController } from '../controllers/auth.controller';

export async function authRoutes(app: FastifyInstance) {
  // POST /register
  app.post('/register', AuthController.register);

  // POST /login
  app.post('/login', AuthController.login);

  // POST /logout
  app.post('/logout', AuthController.logout);
}
