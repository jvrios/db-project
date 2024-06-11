import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFornecedorDto } from 'src/DTOs/create-fornecedor.dto';
import { UpdateFornecedorDto } from 'src/DTOs/update-fornecedor.dto';
import { Fornecedor } from 'src/entities/fornecedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FornecedoresService {
    constructor(
        @InjectRepository(Fornecedor)
        private readonly fornecedorRepository: Repository<Fornecedor>
    ) {}
    async findAll(): Promise<Fornecedor[]> {
        return await this.fornecedorRepository.find();
    }
    async findOne(id: number): Promise<Fornecedor> {
        const fornecedor = await this.fornecedorRepository.findOne({ where: {id: id}});
        if (!fornecedor) {
            throw new NotFoundException(`Fornecedor não encontrada`)
        }
        return (fornecedor);
    }
    async create(CreateFornecedorDto: CreateFornecedorDto): Promise<Fornecedor>{
        const fornecedor = this.fornecedorRepository.create(CreateFornecedorDto)
        return await this.fornecedorRepository.save(fornecedor);
    }
    async update(id: number, updateFornecedorDto: UpdateFornecedorDto): Promise<Fornecedor>{
        const fornecedor = await this.findOne(id);
        Object.assign(fornecedor, updateFornecedorDto);
        return await this.fornecedorRepository.save(fornecedor);
    }
    async remove(id: number) {
        const result = await this.fornecedorRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'fornecedor deletada com sucesso'};
    } 
}
