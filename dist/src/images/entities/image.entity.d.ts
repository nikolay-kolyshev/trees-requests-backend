import { AbstractEntity } from '@/common/entities/abstract.entity';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
export declare class ImageEntity extends AbstractEntity {
    name: string;
    data: Uint8Array;
    treesRequest: TreesRequestEntity;
}
