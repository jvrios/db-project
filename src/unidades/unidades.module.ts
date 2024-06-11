import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from 'src/entities/unidade.entity';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Unidade])],
    controllers: [UnidadesController],
    providers: [UnidadesService],
})
export class UnidadesModule {}
