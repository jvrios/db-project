import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from 'src/DTOs/create-receita.dto';
import { Receita } from 'src/entities/receita.entity';
import { UpdateReceitaDto } from 'src/DTOs/update-receita.dto';

@Controller('receitas')
export class ReceitasController {
    constructor(private readonly receitasService: ReceitasService) {}

    @Post()
    create(@Body() createReceitaDto: CreateReceitaDto): Promise<Receita> {
        return this.receitasService.create(createReceitaDto);
    }

    @Get()
    findAll(): Promise<Receita[]> {
        return this.receitasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Receita> {
        return this.receitasService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateReceitaDto: UpdateReceitaDto): Promise<Receita> {
        return this.receitasService.update(id, updateReceitaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.receitasService.remove(+id);
    }

    @Get(':id/details')
    getReceitaDetails(@Param('id') id: string) {
        const receitaId = parseInt(id, 10);
        return this.receitasService.getReceitaWithContratoDetails(receitaId);
    }
}
