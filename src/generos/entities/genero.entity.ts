import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

}
