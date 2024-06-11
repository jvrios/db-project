import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTOs/create-user.dto';
import { User } from 'src/entities/user.entity';
import { UpdateUserDto } from 'src/DTOs/update-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: {id: id} });
        if (!user) {
            throw new NotFoundException(`Usuario nao encontrado ${id}`);
        }
        return (user);
    }
    async create(CreateUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(CreateUserDto)
        return await this.userRepository.save(user);
    }
    async update(id: number, UpdateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.findOne(id);
        Object.assign(user, UpdateUserDto);
        return await this.userRepository.save(user);
    }
    async remove(id: number) {

        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id}" nao encontrado`)
        }
        return { message: 'usuario deletado com sucesso'};
    }
}

