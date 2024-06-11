import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';
import { Despesa } from 'src/entities/despesa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Despesa])],
  controllers: [DespesasController],
  providers: [DespesasService]
})
export class DespesasModule {}
