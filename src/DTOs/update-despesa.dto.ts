import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateDespesaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    date: Date;
}