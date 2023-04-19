import { ApiProperty } from '@nestjs/swagger';

export class CreateTreesRequestDto {
  @ApiProperty({ name: 'name' })
  readonly name: string;
  @ApiProperty({ name: 'description' })
  readonly description: string;
  @ApiProperty({ name: 'coordinatesAccuracy' })
  readonly coordinatesAccuracy: string;
  @ApiProperty({ name: 'coordinatesLatitude' })
  readonly coordinatesLatitude: string;
  @ApiProperty({ name: 'coordinatesLongitude' })
  readonly coordinatesLongitude: string;
  @ApiProperty({ name: 'image' })
  readonly image: Express.Multer.File;
}
