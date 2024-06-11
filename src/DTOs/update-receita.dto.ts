import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateReceitaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    date: Date;
}