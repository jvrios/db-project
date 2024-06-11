import { Module } from '@nestjs/common';
import { FornecedoresController } from './fornecedores.controller';
import { FornecedoresService } from './fornecedores.service';
import { Fornecedor } from 'src/entities/fornecedor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor])],
  controllers: [FornecedoresController],
  providers: [FornecedoresService]
})
export class FornecedoresModule {}
