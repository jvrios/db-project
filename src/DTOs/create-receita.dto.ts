import { IsNotEmpty, IsString} from 'class-validator';

export class CreateReceitaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    date: Date;

    contratoId: number;
}