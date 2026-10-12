import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
  } from '@nestjs/common';
  
  import { JwtAuthGuard }
  from '../guards/jwt-auth.guard.js';
  
  import { ContatosClienteService }
  from './contatos-cliente.service.js';
  
  import { CreateContatoClienteDto }
  from './dto/create-contato-cliente.dto.js';
  
  @Controller('contatos-cliente')
  @UseGuards(JwtAuthGuard)
  export class ContatosClienteController {
    constructor(
      private readonly contatosClienteService:
        ContatosClienteService,
    ) {}
  
    @Get()
    findAll() {
      return this.contatosClienteService.findAll();
    }
  
    @Get('cliente/:clienteId')
    findByCliente(
      @Param('clienteId')
      clienteId: string,
    ) {
      return this.contatosClienteService.findByCliente(
        clienteId,
      );
    }
  
    @Post()
    create(
      @Body()
      dto: CreateContatoClienteDto,
    ) {
      return this.contatosClienteService.create(dto);
    }
  }