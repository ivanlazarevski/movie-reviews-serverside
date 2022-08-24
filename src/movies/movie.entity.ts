import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: string;

  @Column()
  rating: number;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column({ default: 0 })
  likeCount: number;

  @Column()
  director: string;
}
