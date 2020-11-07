import { type } from "os";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import BookEntity from "./book.entity";

@Entity()
export default class GenreEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

   @Column()
   type: string;

   @ManyToMany( type => GenreEntity)
   @JoinTable()
   books: BookEntity[];
}