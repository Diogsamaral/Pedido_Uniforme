import { Test, TestingModule } from '@nestjs/testing';
import { TabelaPrecosController } from './tabela-precos.controller.js';

describe('TabelaPrecosController', () => {
  let controller: TabelaPrecosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabelaPrecosController],
    }).compile();

    controller = module.get<TabelaPrecosController>(TabelaPrecosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
