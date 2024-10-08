/* eslint-disable prettier/prettier */

import { Author } from 'src/author/entities/author.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity,  JoinTable,  ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cancion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  mp3: string;

  @Column({ type: 'date' })
  year: Date;

  @ManyToOne(() => Genero, (genero) => genero.canciones)
  genero: Genero;

  @ManyToOne(() => Author, (author) => author.canciones)
  author: Author;

  
  @ManyToMany(()=>Playlist,(playlist)=>playlist.canciones)
  @JoinTable()
  playlists:Playlist[];
}
  