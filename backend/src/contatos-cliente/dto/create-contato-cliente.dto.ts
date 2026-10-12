import {
    IsBoolean,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateContatoClienteDto {
    @IsString()
    clienteId: string;
  
    @IsString()
    nome: string;
  
    @IsOptional()
    @IsString()
    cargo?: string;
  
    @IsOptional()
    @IsString()
    email?: string;
  
    @IsOptional()
    @IsString()
    telefone?: string;
  
    @IsOptional()
    @IsBoolean()
    principal?: boolean;
  }