import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

import { CreateContatoClienteDto }
from './dto/create-contato-cliente.dto.js';

@Injectable()
export class ContatosClienteService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreateContatoClienteDto,
  ) {
    return this.prisma.contatoCliente.create({
      data: {
        clienteId: dto.clienteId,
        nome: dto.nome,
        cargo: dto.cargo,
        email: dto.email,
        telefone: dto.telefone,
        principal: dto.principal ?? false,
      },
    });
  }

  async findAll() {
    return this.prisma.contatoCliente.findMany({
      include: {
        cliente: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });
  }

  async findByCliente(
    clienteId: string,
  ) {
    return this.prisma.contatoCliente.findMany({
      where: {
        clienteId,
      },
      orderBy: {
        nome: 'asc',
      },
    });
  }
}