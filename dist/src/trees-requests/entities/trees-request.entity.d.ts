import { AbstractEntity } from '@/common/entities/abstract.entity';
import { ImageEntity } from '@/images/entities/image.entity';
export declare class TreesRequestEntity extends AbstractEntity {
    name: string;
    description: string;
    coordinatesAccuracy: string;
    coordinatesLatitude: string;
    coordinatesLongitude: string;
    image: ImageEntity;
}
