import {
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateProdutoDto {
    @IsString()
    empresaId: string;
  
    @IsString()
    nome: string;
  
    @IsOptional()
    @IsString()
    descricao?: string;
  }