// session.d.ts

import '@fastify/session';

declare module '@fastify/session' {
  interface FastifySessionObject {
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }
}
