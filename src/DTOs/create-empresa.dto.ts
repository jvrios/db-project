import { IsNotEmpty, IsString} from 'class-validator';
import { isStringObject } from 'util/types';

export class CreateEmpresaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}