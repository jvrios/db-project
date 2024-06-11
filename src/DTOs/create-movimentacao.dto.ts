import { IsNotEmpty, IsString} from 'class-validator';

export class CreateMovimentacaoDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}