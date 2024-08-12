/* eslint-disable prettier/prettier */
import { Author } from 'src/author/entities/author.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cancion, (cancion) => cancion.genero)
  canciones: Cancion[];
    
  @ManyToMany(() => Author, (author) => author.generos)
  authors: Author[];
}
