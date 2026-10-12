import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { ContatosClienteModule } from './contatos-cliente/contatos-cliente.module.js';
import { ProdutosModule } from './produtos/produtos.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsuariosModule,
    ClientesModule,
    ContatosClienteModule,
    ProdutosModule,
  ],
})
export class AppModule {}