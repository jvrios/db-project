import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, NumericType } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Movimentacao } from "./movimentacao.entity";
import { Fornecedor } from "./fornecedor.entity";


@Entity('despesas')
export class Despesa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    date: Date;

    @Column({nullable: false})
    forma_pagamento: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.despesas)
    empresa: Empresa;

    @ManyToOne(() => Movimentacao, (movimentacao) => movimentacao.despesas)
    movimentacao: Movimentacao;

    @ManyToOne(() => Fornecedor, (fornecedor) => fornecedor.despesas)
    fornecedor: Fornecedor;

    @Column({nullable: false})
    value: number;

    @Column()
    description: string;
}