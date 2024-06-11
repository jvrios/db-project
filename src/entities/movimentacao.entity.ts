import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Empresa } from "./empresa.entity";
import { Despesa } from "./despesa.entity";
import { Receita } from "./receita.entity";


@Entity('movimentacoes')
export class Movimentacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.movimentacoes)
    empresa: Empresa;

    @OneToMany(() => Despesa, (despesa) => despesa.movimentacao)
    despesas: Despesa;

    @OneToMany(() => Receita, (receita) => receita.movimentacao)
    receitas: Receita[];
}