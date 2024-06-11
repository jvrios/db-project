import { IsString, IsNotEmpty} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    name: string;

    @IsNotEmpty({ message: 'Campo não pode estar vazio'})
    password: string;
}