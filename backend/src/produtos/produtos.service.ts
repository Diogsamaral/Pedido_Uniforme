import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

import { CreateProdutoDto } from './dto/create-produto.dto.js';

@Injectable()
export class ProdutosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreateProdutoDto,
  ) {
    return this.prisma.produto.create({
      data: {
        empresaId: dto.empresaId,
        nome: dto.nome,
        descricao: dto.descricao,
      },
    });
  }

  async findAll() {
    return this.prisma.produto.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.produto.findUnique({
      where: {
        id,
      },
    });
  }
}