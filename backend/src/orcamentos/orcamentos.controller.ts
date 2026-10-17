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
  
  import { OrcamentosService }
  from './orcamentos.service.js';
  
  import { CreateOrcamentoDto }
  from './dto/create-orcamento.dto.js';
  
  @Controller('orcamentos')
  @UseGuards(JwtAuthGuard)
  export class OrcamentosController {
    constructor(
      private readonly orcamentosService:
        OrcamentosService,
    ) {}
  
    @Get()
    findAll() {
      return this.orcamentosService.findAll();
    }
  
    @Get(':id')
    findOne(
      @Param('id')
      id: string,
    ) {
      return this.orcamentosService.findOne(id);
    }
  
    @Post()
    create(
      @Body()
      dto: CreateOrcamentoDto,
    ) {
      return this.orcamentosService.create(dto);
    }
  }