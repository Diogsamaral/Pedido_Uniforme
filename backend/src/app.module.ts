import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { ContatosClienteModule } from './contatos-cliente/contatos-cliente.module.js';
import { ProdutosModule } from './produtos/produtos.module.js';
import { TabelaPrecosModule } from './tabela-precos/tabela-precos.module.js';
import { OrcamentosModule } from './orcamentos/orcamentos.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsuariosModule,
    ClientesModule,
    ContatosClienteModule,
    ProdutosModule,
    TabelaPrecosModule,
    OrcamentosModule,
  ],
})
export class AppModule {}