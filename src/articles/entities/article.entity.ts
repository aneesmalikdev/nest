import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class Article {
  @IsString()
  @ApiProperty()
  title: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string

  @IsString()
  @ApiProperty()
  body: string

  @IsBoolean()
  @ApiProperty()
  published: boolean

  @IsNumber()
  @ApiProperty()
  authorId: number | null
}
