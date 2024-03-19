import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Book, (book) => book.pages)
  book!: Relation<Book>;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'int' })
  number!: number;
}
