import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

}
