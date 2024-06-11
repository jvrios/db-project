import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/DTOs/create-user.dto';
import { UpdateUserDto } from 'src/DTOs/update-user.dto';
import { Empresa } from 'src/entities/empresa.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
         return this.usersService.create(createUserDto);
    }
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.update(+id, updateUserDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove( +id);
    }
}