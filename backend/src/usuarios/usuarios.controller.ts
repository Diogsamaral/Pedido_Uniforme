import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
  } from '@nestjs/common';
  
  import { JwtAuthGuard } from '../guards/jwt-auth.guard.js';
  
  import { UsuariosService } from './usuarios.service.js';
  
  import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
  
  @Controller('usuarios')
  @UseGuards(JwtAuthGuard)
  export class UsuariosController {
    constructor(
      private readonly usuariosService: UsuariosService,
    ) {}
  
    @Get()
    findAll() {
      return this.usuariosService.findAll();
    }
  
    @Get(':id')
    findOne(
      @Param('id')
      id: string,
    ) {
      return this.usuariosService.findOne(id);
    }
  
    @Post()
    create(
      @Body()
      dto: CreateUsuarioDto,
    ) {
      return this.usuariosService.create(dto);
    }
  }