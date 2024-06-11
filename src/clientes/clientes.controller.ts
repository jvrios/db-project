import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from 'src/DTOs/create-cliente.dto';
import { Cliente } from 'src/entities/cliente.entity';
import { UpdateClienteDto } from 'src/DTOs/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @Post()
    create(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
        return this.clientesService.create(createClienteDto);
    }
    @Get()
    findAll(): Promise<Cliente[]> {
        return this.clientesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Cliente> {
        return this.clientesService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    return this.clientesService.update(id, updateClienteDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clientesService.remove(+id);
    }
}
