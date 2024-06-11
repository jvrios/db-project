import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from 'src/entities/empresa.entity';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empresa])],
    controllers: [EmpresasController],
    providers: [EmpresasService],
})
export class EmpresasModule {}
