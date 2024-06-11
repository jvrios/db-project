import { IsNotEmpty, IsString} from 'class-validator';
import { isStringObject } from 'util/types';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;

    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    password: string;
}