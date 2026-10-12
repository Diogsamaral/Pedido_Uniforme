import {
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateClienteDto {
    @IsString()
    empresaId: string;
  
    @IsString()
    razaoSocial: string;
  
    @IsOptional()
    @IsString()
    nomeFantasia?: string;
  
    @IsString()
    cnpj: string;
  
    @IsOptional()
    @IsString()
    email?: string;
  
    @IsOptional()
    @IsString()
    telefone?: string;
  }
  