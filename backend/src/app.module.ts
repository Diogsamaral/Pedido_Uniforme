import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ClientesModule } from './clientes/clientes.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsuariosModule,
    ClientesModule,
  ],
})
export class AppModule {}