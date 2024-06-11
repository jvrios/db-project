import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from 'src/DTOs/create-despesa.dto';
import { Despesa } from 'src/entities/despesa.entity';
import { UpdateDespesaDto } from 'src/DTOs/update-despesa.dto';

@Controller('despesas')
export class DespesasController {
    constructor(private readonly despesasService: DespesasService) {}

    @Post()
    create(@Body() createDespesaDto: CreateDespesaDto): Promise<Despesa> {
        return this.despesasService.create(createDespesaDto);
    }
    @Get()
    findAll(): Promise<Despesa[]> {
        return this.despesasService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Despesa> {
        return this.despesasService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateDespesaDto: UpdateDespesaDto): Promise<Despesa> {
    return this.despesasService.update(id, updateDespesaDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.despesasService.remove(+id);
    }
}
