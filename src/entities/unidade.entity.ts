import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Contrato } from "./contrato.entity";

@Entity('unidades')
export class Unidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.unidades)
    empresa: Empresa

    @ManyToOne(() => Contrato, (contrato) => contrato.unidades)
    contratos: Contrato
}