import { Column, Entity, OneToOne } from 'typeorm';
import { AbstractEntity } from '@/common/entities/abstract.entity';
import { Exclude } from 'class-transformer';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';

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
