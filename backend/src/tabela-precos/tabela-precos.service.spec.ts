import { Test, TestingModule } from '@nestjs/testing';
import { TabelaPrecosService } from './tabela-precos.service.js';

describe('TabelaPrecosService', () => {
  let service: TabelaPrecosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabelaPrecosService],
    }).compile();

    service = module.get<TabelaPrecosService>(TabelaPrecosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
