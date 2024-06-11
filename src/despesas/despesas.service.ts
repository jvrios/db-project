import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDespesaDto } from 'src/DTOs/create-despesa.dto';
import { UpdateDespesaDto } from 'src/DTOs/update-despesa.dto';
import { Despesa } from 'src/entities/despesa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DespesasService {
    constructor(
        @InjectRepository(Despesa)
        private readonly despesaRepository: Repository<Despesa>
    ) {}
    async findAll(): Promise<Despesa[]> {
        return await this.despesaRepository.find();
    }
    async findOne(id: number): Promise<Despesa> {
        const despesa = await this.despesaRepository.findOne({ where: {id: id}});
        if (!despesa) {
            throw new NotFoundException(`Despesa não encontrada`)
        }
        return (despesa);
    }
    async create(CreateDespesaDto: CreateDespesaDto): Promise<Despesa>{
        const despesa = this.despesaRepository.create(CreateDespesaDto)
        return await this.despesaRepository.save(despesa);
    }
    async update(id: number, updateDespesaDto: UpdateDespesaDto): Promise<Despesa>{
        const despesa = await this.findOne(id);
        Object.assign(despesa, updateDespesaDto);
        return await this.despesaRepository.save(despesa);
    }
    async remove(id: number) {
        const result = await this.despesaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'despesa deletada com sucesso'};
    } 
}
