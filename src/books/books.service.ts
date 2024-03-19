import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { PageOptionsDto } from 'src/global/dto/page-options.dto';
import { PageDto } from 'src/global/dto/page.dto';
import { PageMetaDto } from 'src/global/dto/page-meta.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto);
  }

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Book>> {
    const [books, itemCount] = await this.bookRepository.findAndCount({
      relations: ['author', 'pages'],
      order: { created_at: pageOptionsDto.order },
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
    });

    const pageMetaData = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(books, pageMetaData);
  }

  findOne(id: string) {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['author', 'pages'],
    });
  }

  update(id: string, updateBookDto: Partial<CreateBookDto>) {
    return this.bookRepository.update(id, updateBookDto);
  }

  remove(id: string) {
    return this.bookRepository.delete(id);
  }
}
