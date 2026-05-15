import {
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';

import { JwtGuard } from './guards/jwt.guard';

import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  // REGISTER
  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  // LOGIN
  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body);
  }
  @UseGuards(JwtGuard)
@Get('me')
getMe(@Req() req: any) {
  return req.user;
}
}