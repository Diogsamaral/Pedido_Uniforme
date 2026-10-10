import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(
      dto.senha,
      10,
    );
  
    const usuario =
      await this.prisma.usuario.create({
        data: {
          nome: dto.nome,
          email: dto.email,
          senhaHash,
          empresaId: dto.empresaId,
        },
      });
  
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        ativo: true,
        empresaId: true,
        createdAt: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
  }
}