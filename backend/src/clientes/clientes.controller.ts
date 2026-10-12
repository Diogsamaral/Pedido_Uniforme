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
  
  import { ClientesService }
  from './clientes.service.js';
  
  import { CreateClienteDto }
  from './dto/create-cliente.dto.js';
  
  @Controller('clientes')
  @UseGuards(JwtAuthGuard)
  export class ClientesController {
    constructor(
      private readonly clientesService:
        ClientesService,
    ) {}
  
    @Get()
    findAll() {
      return this.clientesService.findAll();
    }
  
    @Get(':id')
    findOne(
      @Param('id')
      id: string,
    ) {
      return this.clientesService.findOne(id);
    }
  
    @Post()
    create(
      @Body()
      dto: CreateClienteDto,
    ) {
      return this.clientesService.create(dto);
    }
  }