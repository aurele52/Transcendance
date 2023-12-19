import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty()
  eng: string;

  @ApiProperty()
  fr: string;

  @ApiProperty({ required: false })
  hint?: string;

  @ApiProperty({ default: 0 })
  level: number = 0;
}
