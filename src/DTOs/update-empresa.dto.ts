import { IsNotEmpty, IsString} from 'class-validator';
import { isStringObject } from 'util/types';

export class UpdateEmpresaDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;
}