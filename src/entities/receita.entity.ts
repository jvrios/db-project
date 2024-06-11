import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Movimentacao } from "./movimentacao.entity";
import { Contrato } from "./contrato.entity";


@Entity('receitas')
export class Receita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    date: Date;

    @ManyToOne(() => Empresa, (empresa) => empresa.receitas)
    empresa: Empresa;

    @ManyToOne(() => Movimentacao, (movimentacao) => movimentacao.receitas)
    movimentacao: Movimentacao;

    @ManyToOne(() => Contrato, (contrato) => contrato.receitas)
    contrato: Contrato;

}