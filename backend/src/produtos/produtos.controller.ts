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
  
  import { ProdutosService }
  from './produtos.service.js';
  
  import { CreateProdutoDto }
  from './dto/create-produto.dto.js';
  
  @Controller('produtos')
  @UseGuards(JwtAuthGuard)
  export class ProdutosController {
    constructor(
      private readonly produtosService:
        ProdutosService,
    ) {}
  
    @Get()
    findAll() {
      return this.produtosService.findAll();
    }
  
    @Get(':id')
    findOne(
      @Param('id')
      id: string,
    ) {
      return this.produtosService.findOne(id);
    }
  
    @Post()
    create(
      @Body()
      dto: CreateProdutoDto,
    ) {
      return this.produtosService.create(dto);
    }
  }