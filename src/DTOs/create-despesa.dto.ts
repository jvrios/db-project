import { IsNotEmpty, IsString} from 'class-validator';

export class CreateDespesaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    date: Date;
}