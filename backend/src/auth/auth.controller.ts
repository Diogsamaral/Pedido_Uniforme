import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service.js';
import { JwtAuthGuard } from '../guards/jwt-auth.guard.js';
import { CurrentUser } from '../decorators/current-user.decorator.js';
import { LoginDto } from './dto/login.dto.js';


@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Get('health')
  health() {
    return {
      status: 'ok',
    };
  }

  @Post('login')
  async login(
    @Body()
    dto: LoginDto,
  ) {
    return this.authService.login(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(
    @CurrentUser()
    user: any,
  ) {
    return this.authService.me(
      user.userId,
    );
  }
}