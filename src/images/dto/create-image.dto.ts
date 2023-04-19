import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({ name: 'name' })
  readonly name: string;
  @ApiProperty({ name: 'data' })
  readonly data: Buffer;
}
