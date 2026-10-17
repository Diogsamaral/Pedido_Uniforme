import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

import { CreateTabelaPrecoDto }
from './dto/create-tabela-preco.dto.js';

@Injectable()
export class TabelaPrecosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreateTabelaPrecoDto,
  ) {
    return this.prisma.tabelaPreco.create({
      data: {
        produtoId: dto.produtoId,
        quantidadeMin: dto.quantidadeMin,
        quantidadeMax: dto.quantidadeMax,
        precoUnitario: dto.precoUnitario,
      },
    });
  }

  async findAll() {
    return this.prisma.tabelaPreco.findMany({
      include: {
        produto: true,
      },
    });
  }

  async findByProduto(
    produtoId: string,
  ) {
    return this.prisma.tabelaPreco.findMany({
      where: {
        produtoId,
      },
      orderBy: {
        quantidadeMin: 'asc',
      },
    });
  }
}