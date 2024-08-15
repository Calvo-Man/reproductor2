/* eslint-disable prettier/prettier */
import { Cancion } from "src/cancion/entities/cancion.entity";
import { Genero } from "src/generos/entities/genero.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    country:string;

    @OneToMany(() => Cancion, (cancion) => cancion.author)
    canciones: Cancion[];


    @ManyToMany(() => Genero, (genero) => genero.authors)
    @JoinTable()
    generos: Genero[];
}
