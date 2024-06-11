import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContratoDto } from 'src/DTOs/create-contrato.dto';
import { UpdateContratoDto } from 'src/DTOs/update-contrato.dto';
import { Contrato } from 'src/entities/contrato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContratosService {
    constructor(
        @InjectRepository(Contrato)
        private readonly contratosRepository: Repository<Contrato>
    ) {}
    async findAll(): Promise<Contrato[]> {
        return await this.contratosRepository.find();
    }
    async findOne(id: number): Promise<Contrato> {
        const contratos = await this.contratosRepository.findOne({ where: {id: id}});
        if (!contratos) {
            throw new NotFoundException(`Contratos não encontrada`)
        }
        return (contratos);
    }
    async create(CreateContratosDto: CreateContratoDto): Promise<Contrato>{
        const contratos = this.contratosRepository.create(CreateContratosDto)
        return await this.contratosRepository.save(contratos);
    }
    async update(id: number, updateContratosDto: UpdateContratoDto): Promise<Contrato>{
        const contratos = await this.findOne(id);
        Object.assign(contratos, updateContratosDto);
        return await this.contratosRepository.save(contratos);
    }
    async remove(id: number) {
        const result = await this.contratosRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'contratos deletada com sucesso'};
    } 
}
