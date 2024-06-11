import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmpresaDto } from 'src/DTOs/create-empresa.dto';
import { UpdateEmpresaDto } from 'src/DTOs/update-empresa.dto';
import { Empresa } from 'src/entities/empresa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresasService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>
    ) {}
    async findAll(): Promise<Empresa[]> {
        return await this.empresaRepository.find();
    }
    async findOne(id: number): Promise<Empresa> {
        const empresa = await this.empresaRepository.findOne({ where: {id: id}});
        if (!empresa) {
            throw new NotFoundException(`Empresa não encontrada`)
        }
        return (empresa);
    }
    async create(CreateEmpresaDto: CreateEmpresaDto): Promise<Empresa>{
        const empresa = this.empresaRepository.create(CreateEmpresaDto)
        return await this.empresaRepository.save(empresa);
    }
    async update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa>{
        const empresa = await this.findOne(id);
        Object.assign(empresa, updateEmpresaDto);
        return await this.empresaRepository.save(empresa);
    }
    async remove(id: number) {
        const result = await this.empresaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'empresa deletada com sucesso'};
    } 
}
