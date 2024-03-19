import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private bookRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.bookRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | undefined> {
    return this.bookRepository.save({ email, password });
  }
}
