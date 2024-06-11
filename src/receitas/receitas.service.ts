import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReceitaDto } from 'src/DTOs/create-receita.dto';
import { UpdateReceitaDto } from 'src/DTOs/update-receita.dto';
import { Receita } from 'src/entities/receita.entity';
import { Contrato } from 'src/entities/contrato.entity'; // Import Contrato entity
import { Repository } from 'typeorm';

@Injectable()
export class ReceitasService {
    constructor(
        @InjectRepository(Receita)
        private readonly receitaRepository: Repository<Receita>,
        @InjectRepository(Contrato)
        private readonly contratoRepository: Repository<Contrato>, // Inject Contrato repository
    ) {}

    async findAll(): Promise<Receita[]> {
        return await this.receitaRepository.find();
    }

    async findOne(id: number): Promise<Receita> {
        const receita = await this.receitaRepository.findOne({ where: { id: id } });
        if (!receita) {
            throw new NotFoundException(`Receita não encontrada`);
        }
        return receita;
    }

    async create(createReceitaDto: CreateReceitaDto): Promise<Receita> {
        const { contratoId, ...receitaData } = createReceitaDto;

        const contrato = await this.contratoRepository.findOne({ where: { id: contratoId } });
        if (!contrato) {
            throw new NotFoundException(`Contrato com ID ${contratoId} não encontrado`);
        }

        const receita = this.receitaRepository.create({ ...receitaData, contrato });
        return await this.receitaRepository.save(receita);
    }

    async update(id: number, updateReceitaDto: UpdateReceitaDto): Promise<Receita> {
        const receita = await this.findOne(id);
        Object.assign(receita, updateReceitaDto);
        return await this.receitaRepository.save(receita);
    }

    async remove(id: number) {
        const result = await this.receitaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`ID "${id}" não encontrado`);
        }
        return { message: 'Receita deletada com sucesso' };
    }

    async getReceitaWithContratoDetails(receitaId: number) {
        const receita = await this.receitaRepository.findOne({
            where: { id: receitaId },
            relations: ['contrato', 'contrato.unidade', 'contrato.cliente'],
        });

        if (!receita) {
            throw new NotFoundException('Receita não encontrada');
        }

        return {
            clientName: receita.contrato.cliente.name,
            unitName: receita.contrato.unidade.name,
            contractPrice: receita.contrato.value,
            contractDate: receita.contrato.period,
        };
    }
}
