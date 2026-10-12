import { Test, TestingModule } from '@nestjs/testing';
import { ContatosClienteController } from './contatos-cliente.controller.js';

describe('ContatosClienteController', () => {
  let controller: ContatosClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatosClienteController],
    }).compile();

    controller = module.get<ContatosClienteController>(ContatosClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
