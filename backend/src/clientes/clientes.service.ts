import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

import { CreateClienteDto } from './dto/create-cliente.dto.js';

@Injectable()
export class ClientesService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreateClienteDto,
  ) {
    return this.prisma.cliente.create({
      data: {
        empresaId: dto.empresaId,
        razaoSocial: dto.razaoSocial,
        nomeFantasia: dto.nomeFantasia,
        cnpj: dto.cnpj,
        email: dto.email,
        telefone: dto.telefone,
      },
    });
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      orderBy: {
        razaoSocial: 'asc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.cliente.findUnique({
      where: {
        id,
      },
    });
  }
}