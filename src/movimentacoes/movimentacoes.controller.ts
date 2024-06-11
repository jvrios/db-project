import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacaoDto } from 'src/DTOs/create-movimentacao.dto';
import { Movimentacao } from 'src/entities/movimentacao.entity';
import { UpdateMovimentacaoDto } from 'src/DTOs/update-movimentacao.dto';

@Controller('movimentacoes')
export class MovimentacoesController {
    constructor(private readonly movimentacoesService: MovimentacoesService) {}

    @Post()
    create(@Body() createMovimentacaoDto: CreateMovimentacaoDto): Promise<Movimentacao> {
        return this.movimentacoesService.create(createMovimentacaoDto);
    }
    @Get()
    findAll(): Promise<Movimentacao[]> {
        return this.movimentacoesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Movimentacao> {
        return this.movimentacoesService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateMovimentacaoDto: UpdateMovimentacaoDto): Promise<Movimentacao> {
    return this.movimentacoesService.update(id, updateMovimentacaoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.movimentacoesService.remove(+id);
    }
}
