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

import { TabelaPrecosService }
from './tabela-precos.service.js';

import { CreateTabelaPrecoDto }
from './dto/create-tabela-preco.dto.js';

@Controller('tabela-precos')
@UseGuards(JwtAuthGuard)
export class TabelaPrecosController {
constructor(
    private readonly tabelaPrecosService:
    TabelaPrecosService,
) {}

@Get()
findAll() {
    return this.tabelaPrecosService.findAll();
}

@Get('produto/:produtoId')
findByProduto(
    @Param('produtoId')
    produtoId: string,
) {
    return this.tabelaPrecosService.findByProduto(
    produtoId,
    );
}

@Post()
create(
    @Body()
    dto: CreateTabelaPrecoDto,
) {
    return this.tabelaPrecosService.create(dto);
}
}