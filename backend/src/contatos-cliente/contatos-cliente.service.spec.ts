import { Test, TestingModule } from '@nestjs/testing';
import { ContatosClienteService } from './contatos-cliente.service.js';

describe('ContatosClienteService', () => {
  let service: ContatosClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatosClienteService],
    }).compile();

    service = module.get<ContatosClienteService>(ContatosClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
