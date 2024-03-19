import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  OneToMany,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => Book, (book) => book.author)
  books!: Relation<Book[]>;

  @Column({ type: 'text' })
  name!: string;
}
