import { Column, Entity, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { AbstractEntity } from '../../common/entities/abstract.entity';
import { TreesRequestEntity } from '../../trees-requests/entities/trees-request.entity';

@Entity('image')
export class ImageEntity extends AbstractEntity {
  @Column({
    nullable: false,
  })
  name: string;

  @Exclude()
  @Column({
    type: 'bytea',
  })
  data: Uint8Array;

  @Exclude()
  @OneToOne(() => TreesRequestEntity, (treeRequest) => treeRequest.image)
  treesRequest: TreesRequestEntity;
}
