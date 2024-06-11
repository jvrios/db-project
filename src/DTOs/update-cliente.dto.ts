import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateClienteDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}