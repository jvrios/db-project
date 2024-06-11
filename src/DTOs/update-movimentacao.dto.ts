import { IsNotEmpty, IsString} from 'class-validator';

export class UpdateMovimentacaoDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}