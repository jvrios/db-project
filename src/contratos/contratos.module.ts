import { Module } from '@nestjs/common';
import { ContratosController } from './contratos.controller';
import { ContratosService } from './contratos.service';
import { Contrato } from 'src/entities/contrato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  controllers: [ContratosController],
  providers: [ContratosService]
})
export class ContratosModule {}
