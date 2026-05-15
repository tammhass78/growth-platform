import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // REGISTER
  async register(data: {
    email: string;
    name: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(
      data.password,
      10,
    );

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  // LOGIN
  async login(data: {
    email: string;
    password: string;
  }) {
    // 1. البحث عن المستخدم
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // 2. لو المستخدم غير موجود
    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    // 3. مقارنة الباسورد
    const passwordMatched = await bcrypt.compare(
      data.password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    // 4. إنشاء JWT
    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      access_token: token,
    };
  }
}