import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedorDto } from 'src/DTOs/create-fornecedor.dto';
import { Fornecedor } from 'src/entities/fornecedor.entity';
import { UpdateFornecedorDto } from 'src/DTOs/update-fornecedor.dto';

@Controller('fornecedores')
export class FornecedoresController {
    constructor(private readonly fornecedoresService: FornecedoresService) {}

    @Post()
    create(@Body() createFornecedorDto: CreateFornecedorDto): Promise<Fornecedor> {
        return this.fornecedoresService.create(createFornecedorDto);
    }
    @Get()
    findAll(): Promise<Fornecedor[]> {
        return this.fornecedoresService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Fornecedor> {
        return this.fornecedoresService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateFornecedorDto: UpdateFornecedorDto): Promise<Fornecedor> {
    return this.fornecedoresService.update(id, updateFornecedorDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.fornecedoresService.remove(+id);
    }
}
