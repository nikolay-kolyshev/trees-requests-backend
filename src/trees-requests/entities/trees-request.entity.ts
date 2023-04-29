import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../common/entities/abstract.entity';
import { ImageEntity } from '../../images/entities/image.entity';

@Entity('trees-request')
export class TreesRequestEntity extends AbstractEntity {
  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: false,
  })
  coordinatesAccuracy: string;

  @Column({
    nullable: false,
  })
  coordinatesLatitude: string;

  @Column({
    nullable: false,
  })
  coordinatesLongitude: string;

  @JoinColumn()
  @OneToOne(() => ImageEntity, (image: ImageEntity) => image.treesRequest, {
    cascade: true,
  })
  image: ImageEntity;
}
