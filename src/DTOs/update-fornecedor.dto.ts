import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateFornecedorDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}