import { IsNotEmpty, IsString} from 'class-validator';

export class CreateContratoDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}