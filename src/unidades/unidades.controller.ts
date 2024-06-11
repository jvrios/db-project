import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { CreateUnidadeDto } from 'src/DTOs/create-unidade.dto';
import { Unidade } from 'src/entities/unidade.entity';
import { UpdateUnidadeDto } from 'src/DTOs/update-unidade.dto';

@Controller('unidades')
export class UnidadesController {
    constructor(private readonly unidadesService: UnidadesService) {}

    @Post()
    create(@Body() CreateUnidadeDto: CreateUnidadeDto): Promise<Unidade> {
        return this.unidadesService.create(CreateUnidadeDto);
    }
    @Get()
    findAll(): Promise<Unidade[]> {
        return this.unidadesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Unidade> {
        return this.unidadesService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() UpdateUnidadeDto: UpdateUnidadeDto): Promise<Unidade> {
        return this.unidadesService.update(id, UpdateUnidadeDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.unidadesService.remove(+id);
    }
}
