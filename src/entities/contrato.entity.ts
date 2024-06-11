import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Unidade } from "./unidade.entity";
import { Cliente } from "./cliente.entity";
import { Receita } from "./receita.entity";

@Entity('contratos')
export class Contrato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.contratos)
    empresa: Empresa;

    @ManyToOne(() => Unidade, (unidade) => unidade.contratos)
    unidade: Unidade;

    @ManyToOne(() => Cliente, (cliente) => cliente.contratos)
    cliente: Cliente;

    @OneToMany(() => Receita, (receita) => receita.contrato)
    receitas: Receita[];

    @Column({nullable: false})
    value: number;

    @Column({nullable: false})
    period: number;
}
