import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUnidadeDto } from 'src/DTOs/create-unidade.dto';
import { UpdateEmpresaDto } from 'src/DTOs/update-empresa.dto';
import { UpdateUnidadeDto } from 'src/DTOs/update-unidade.dto';
import { Unidade } from 'src/entities/unidade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnidadesService {
    constructor(
        @InjectRepository(Unidade)
        private readonly unidadeRepository: Repository<Unidade>
    ) {}
    async findAll(): Promise<Unidade[]> {
        return await this.unidadeRepository.find();
    }
    async findOne(id: number): Promise<Unidade> {
        const unidade = await this.unidadeRepository.findOne({where: {id: id}});
        if (!unidade) {
            throw new NotFoundException(`Unidade nao encontrada`)
        }
        return (unidade);
    }
    async create(CreateUnidadeDto: CreateUnidadeDto): Promise <Unidade>{
        const unidade = await this.unidadeRepository.create(CreateUnidadeDto)
        return await this.unidadeRepository.save(unidade);
    }
    async update(id: number, UpdateUnidadeDto: UpdateUnidadeDto): Promise<Unidade>{
        const unidade = await this.findOne(id);
        Object.assign(unidade, UpdateEmpresaDto);
        return await this.unidadeRepository.save(unidade);
    }
    async remove(id: number) {
        const result = await this.unidadeRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'unidade deletada com sucesso'}
    }
}
