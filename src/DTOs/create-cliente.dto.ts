import { IsNotEmpty, IsString} from 'class-validator';

export class CreateClienteDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}