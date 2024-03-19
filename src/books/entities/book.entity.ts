import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Page } from './page.entity';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 500 })
  title!: string;

  @Column('int', { default: 0 })
  lastReadPage!: number;

  @ManyToOne(() => Author, (author) => author.books, { cascade: true })
  author!: Relation<Author>;

  @OneToMany(() => Page, (page) => page.book, { cascade: true })
  pages!: Relation<Page[]>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
