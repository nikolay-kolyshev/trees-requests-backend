import { AbstractEntity } from '@/common/entities/abstract.entity';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
export declare class TreesRequestsView extends AbstractEntity {
    name: string;
    description: string;
    coordinates: {
        accuracy: string;
        latitude: string;
        longitude: string;
    };
    imageId: number;
    constructor(data: TreesRequestEntity);
}
