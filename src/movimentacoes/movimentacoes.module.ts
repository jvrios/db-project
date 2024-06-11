import { Module } from '@nestjs/common';
import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';
import { Movimentacao } from 'src/entities/movimentacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentacao])],
  controllers: [MovimentacoesController],
  providers: [MovimentacoesService]
})
export class MovimentacoesModule {}
