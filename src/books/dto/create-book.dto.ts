import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

class AuthorDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  id?: string;

  @ValidateIf((o) => !o.id)
  @IsString()
  @ApiProperty({
    type: String,
  })
  name: string;
}

class PageDto {
  @IsOptional()
  @IsString()
  id?: string;
  @ApiProperty({
    type: String,
  })
  @ValidateIf((o) => !o.id)
  @IsString()
  content: string;

  @ValidateIf((o) => !o.id)
  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  number: number;
}

export class CreateBookDto {
  @IsString()
  @ApiProperty({
    type: String,
  })
  title!: string;

  @ValidateNested()
  @Type(() => PageDto)
  @ApiProperty({
    type: PageDto,
  })
  pages: PageDto[];

  @ValidateNested()
  @Type(() => AuthorDto)
  @ApiProperty({
    type: AuthorDto,
  })
  author: AuthorDto;
}
