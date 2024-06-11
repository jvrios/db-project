import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovimentacaoDto } from 'src/DTOs/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from 'src/DTOs/update-movimentacao.dto';
import { Movimentacao } from 'src/entities/movimentacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovimentacoesService {
    constructor(
        @InjectRepository(Movimentacao)
        private readonly movimentacaoRepository: Repository<Movimentacao>
    ) {}
    async findAll(): Promise<Movimentacao[]> {
        return await this.movimentacaoRepository.find();
    }
    async findOne(id: number): Promise<Movimentacao> {
        const movimentacao = await this.movimentacaoRepository.findOne({ where: {id: id}});
        if (!movimentacao) {
            throw new NotFoundException(`Movimentacao não encontrada`)
        }
        return (movimentacao);
    }
    async create(CreateMovimentacaoDto: CreateMovimentacaoDto): Promise<Movimentacao>{
        const movimentacao = this.movimentacaoRepository.create(CreateMovimentacaoDto)
        return await this.movimentacaoRepository.save(movimentacao);
    }
    async update(id: number, updateMovimentacaoDto: UpdateMovimentacaoDto): Promise<Movimentacao>{
        const movimentacao = await this.findOne(id);
        Object.assign(movimentacao, updateMovimentacaoDto);
        return await this.movimentacaoRepository.save(movimentacao);
    }
    async remove(id: number) {
        const result = await this.movimentacaoRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id} " nao encontrado`)
        }
        return { message: 'movimentacao deletada com sucesso'};
    } 
}
