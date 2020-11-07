import { type } from "os";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import GenreEntity from "./genre.entity";
import UserEntity from "./user.entity";

@Entity()
export default class BookEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne( type => UserEntity, user => user.books)
    user: UserEntity;

    @ManyToMany( type => GenreEntity, genres => genres.books)
    genres: GenreEntity[];
}