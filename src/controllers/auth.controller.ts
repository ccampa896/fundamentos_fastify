import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../services/auth.service';
import { z } from 'zod';

export class AuthController {
  static async register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = registerBodySchema.parse(request.body);

    try {
      await AuthService.register({
        name,
        email,
        password,
      });
    } catch (error) {
      return reply.status(409).send();
    }
    return reply.status(201).send();
  }

  static async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });

      const { email, password } = loginBodySchema.parse(request.body);

      const user = await AuthService.login({ email, password });

      // Se login OK, salvar na sessão
      request.session.user = {
        id: user.id,
        email: user.email,
        name: user.name,
      };

      return reply.send({
        message: 'Login successful!',
      });
    } catch (error: any) {
      return reply.status(401).send({ error: error.message });
    }
  }

  static async logout(request: FastifyRequest, reply: FastifyReply) {
    if (!request.session.user) {
      return reply.send({ message: 'No active sessions.' });
    }
    await request.session.destroy();
    return reply.send({ message: 'Logout successful!' });
  }
}
