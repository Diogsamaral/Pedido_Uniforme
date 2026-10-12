import { Module } from '@nestjs/common';

import { ContatosClienteController }
from './contatos-cliente.controller.js';

import { ContatosClienteService }
from './contatos-cliente.service.js';

@Module({
  controllers: [
    ContatosClienteController,
  ],
  providers: [
    ContatosClienteService,
  ],
})
export class ContatosClienteModule {}