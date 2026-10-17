import {
    IsInt,
    IsNumber,
    IsString,
    Min,
} from 'class-validator';
  
export class CreateTabelaPrecoDto {
@IsString()
produtoId: string;

@IsInt()
@Min(1)
quantidadeMin: number;

@IsInt()
@Min(1)
quantidadeMax: number;

@IsNumber()
precoUnitario: number;
}