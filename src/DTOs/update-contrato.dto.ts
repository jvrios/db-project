import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateContratoDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}