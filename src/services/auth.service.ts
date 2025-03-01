import { prisma } from '../lib/prisma';
import { compare, hash } from 'bcryptjs';
import {
  loginUseCaseRequest,
  registerUseCaseRequest,
} from '../interfaces/auth.interface';

export class AuthService {
  static async register({ name, email, password }: registerUseCaseRequest) {
    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new Error('Email already exists!');
    }

    const password_hash = await hash(password, 6);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: password_hash,
      },
    });

    return user;
  }

  static async login({ email, password }: loginUseCaseRequest) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User not found!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password!');
    }

    return user;
  }
}
