import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from 'src/DTOs/create-cliente.dto';
import { UpdateClienteDto } from 'src/DTOs/update-cliente.dto';
import { Cliente } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository: Repository<Cliente>
    ) {}
    async findAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
    }
    async findOne(id: number): Promise<Cliente> {
        const cliente = await this.clienteRepository.findOne({ where: {id: id}});
        if (!cliente) {
            throw new NotFoundException(`Cliente não encontrada`)
        }
        return (cliente);
    }
    async create(CreateClienteDto: CreateClienteDto): Promise<Cliente>{
        const cliente = this.clienteRepository.create(CreateClienteDto)
        return await this.clienteRepository.save(cliente);
    }
    async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>{
        const cliente = await this.findOne(id);
        Object.assign(cliente, updateClienteDto);
        return await this.clienteRepository.save(cliente);
    }
    async remove(id: number) {
        const result = await this.clienteRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'cliente deletado com sucesso'};
    } 
}
