import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Unidade } from "./unidade.entity";
import { Cliente } from "./cliente.entity";
import { Fornecedor } from "./fornecedor.entity";
import { Contrato } from "./contrato.entity";
import { Movimentacao } from "./movimentacao.entity";
import { Despesa } from "./despesa.entity";
import { Receita } from "./receita.entity";

@Entity('empresas')
export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @OneToMany(() => Unidade, (unidade) => unidade.empresa)
    unidades: Unidade[];

    @OneToMany(() => Cliente, (cliente) => cliente.empresa)
    clientes: Cliente[];

    @OneToMany(() => Fornecedor, (fornecedor) => fornecedor.empresa)
    fornecedores: Fornecedor[];

    @OneToMany(() => Contrato, (contrato) => contrato.empresa)
    contratos: Contrato[];

    @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.empresa)
    movimentacoes: Movimentacao[];

    @OneToMany(() => Despesa, (despesa) => despesa.empresa)
    despesas: Despesa[];

    @OneToMany(() => Receita, (receita) => receita.empresa)
    receitas: Receita[];
}