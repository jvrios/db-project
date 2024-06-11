import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { CreateContratoDto } from 'src/DTOs/create-contrato.dto';
import { Contrato } from 'src/entities/contrato.entity';
import { UpdateContratoDto } from 'src/DTOs/update-contrato.dto';

@Controller('contratos')
export class ContratosController {
    constructor(private readonly contratosService: ContratosService) {}

    @Post()
    create(@Body() createContratoDto: CreateContratoDto): Promise<Contrato> {
        return this.contratosService.create(createContratoDto);
    }
    @Get()
    findAll(): Promise<Contrato[]> {
        return this.contratosService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Contrato> {
        return this.contratosService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    return this.contratosService.update(id, updateContratoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contratosService.remove(+id);
    }
}
