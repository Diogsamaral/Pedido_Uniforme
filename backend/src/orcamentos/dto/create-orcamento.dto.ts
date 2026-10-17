import {
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateOrcamentoDto {
    @IsString()
    empresaId: string;
  
    @IsString()
    clienteId: string;
  
    @IsOptional()
    @IsString()
    observacoes?: string;
  }