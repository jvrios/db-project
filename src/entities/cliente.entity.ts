import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Contrato } from "./contrato.entity";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Empresa, (empresa) => empresa.clientes)
    empresa: Empresa;

    @Column({nullable: false})
    name: string;

    @OneToMany(() => Contrato, (contrato) => contrato.cliente)
    contratos: Contrato;
}