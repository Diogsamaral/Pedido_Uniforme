import { Module } from '@nestjs/common';

import { TabelaPrecosController }
from './tabela-precos.controller.js';

import { TabelaPrecosService }
from './tabela-precos.service.js';

@Module({
  controllers: [
    TabelaPrecosController,
  ],
  providers: [
    TabelaPrecosService,
  ],
})
export class TabelaPrecosModule {}