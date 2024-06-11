import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Despesa } from "./despesa.entity";

@Entity('fornecedores')
export class Fornecedor {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Empresa, (empresa) => empresa.fornecedores)
    empresa: Empresa

    @Column({nullable: false})
    name: string;

    @OneToMany(() => Despesa, (despesa) => despesa.fornecedor)
    despesas: Despesa;
}