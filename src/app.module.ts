import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { EmpresasService } from './empresas/empresas.service';
import { EmpresasController } from './empresas/empresas.controller';
import { EmpresasModule } from './empresas/empresas.module';
import { Empresa } from './entities/empresa.entity';
import { UnidadesModule } from './unidades/unidades.module';
import { Unidade } from './entities/unidade.entity';
import { UnidadesController } from './unidades/unidades.controller';
import { UnidadesService } from './unidades/unidades.service';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './entities/cliente.entity';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ContratosModule } from './contratos/contratos.module';
import { Contrato } from './entities/contrato.entity';
import { ContratosController } from './contratos/contratos.controller';
import { ContratosService } from './contratos/contratos.service';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { DespesasModule } from './despesas/despesas.module';
import { Movimentacao } from './entities/movimentacao.entity';
import { Despesa } from './entities/despesa.entity';
import { MovimentacoesController } from './movimentacoes/movimentacoes.controller';
import { DespesasController } from './despesas/despesas.controller';
import { MovimentacoesService } from './movimentacoes/movimentacoes.service';
import { DespesasService } from './despesas/despesas.service';
import { ReceitasModule } from './receitas/receitas.module';
import { Receita } from './entities/receita.entity';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasService } from './receitas/receitas.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Empresa, Unidade, Cliente, Contrato, Movimentacao, Despesa, Receita]),
    UsersModule, EmpresasModule, UnidadesModule, ClientesModule, FornecedoresModule, ContratosModule, MovimentacoesModule, DespesasModule, ReceitasModule,
  ],
  controllers: [AppController, UsersController, EmpresasController, UnidadesController, ClientesController,
     ContratosController, MovimentacoesController, DespesasController, ReceitasController],
  providers: [AppService, UsersService, EmpresasService, UnidadesService, ClientesService, ContratosService,
    MovimentacoesService, DespesasService, ReceitasService],
})
export class AppModule {}
