import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { bookProviders } from './users.providers';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...bookProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
