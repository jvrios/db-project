import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { Receita } from 'src/entities/receita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Receita])],
  providers: [ReceitasService],
  controllers: [ReceitasController]
})
export class ReceitasModule {}
