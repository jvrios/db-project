import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from 'src/DTOs/create-empresa.dto';
import { Empresa } from 'src/entities/empresa.entity';
import { UpdateEmpresaDto } from 'src/DTOs/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
    constructor(private readonly empresasService: EmpresasService) {}

    @Post()
    create(@Body() createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
        return this.empresasService.create(createEmpresaDto);
    }
    @Get()
    findAll(): Promise<Empresa[]> {
        return this.empresasService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Empresa> {
        return this.empresasService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    return this.empresasService.update(id, updateEmpresaDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.empresasService.remove(+id);
    }
}
