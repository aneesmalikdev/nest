import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class createEpisodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsBoolean()
  @ApiProperty()
  featured: boolean

  @ApiProperty()
  createdAt: Date
}
