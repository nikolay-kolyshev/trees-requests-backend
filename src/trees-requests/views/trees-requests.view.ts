import { AbstractEntity } from '@/common/entities/abstract.entity';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';

export class TreesRequestsView extends AbstractEntity {
  name: string;
  description: string;
  coordinates: {
    accuracy: string;
    latitude: string;
    longitude: string;
  };
  imageId: number;

  constructor(data: TreesRequestEntity) {
    super();
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.name = data.name;
    this.description = data.description;
    this.coordinates = {
      accuracy: data.coordinatesAccuracy,
      latitude: data.coordinatesLatitude,
      longitude: data.coordinatesLongitude,
    };
    this.imageId = data.image.id;
  }
}
