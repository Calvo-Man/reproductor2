/* eslint-disable prettier/prettier */
import { Cancion } from "src/cancion/entities/cancion.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToMany(()=>Cancion,(cancion)=>cancion.playlists)
    canciones:Cancion[]

}
