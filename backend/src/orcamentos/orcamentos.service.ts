import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

import { CreateOrcamentoDto }
from './dto/create-orcamento.dto.js';

@Injectable()
export class OrcamentosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreateOrcamentoDto,
  ) {
    return this.prisma.orcamento.create({
      data: {
        empresaId: dto.empresaId,
        clienteId: dto.clienteId,
        observacoes: dto.observacoes,
      },
    });
  }

  async findAll() {
    return this.prisma.orcamento.findMany({
      include: {
        cliente: true,
        itens: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.orcamento.findUnique({
      where: {
        id,
      },
      include: {
        cliente: true,
        itens: true,
      },
    });
  }
}