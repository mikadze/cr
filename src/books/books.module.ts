import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from 'src/db/database.module';
import { bookProviders } from './books.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...bookProviders, BooksService],
})
export class BooksModule {}
