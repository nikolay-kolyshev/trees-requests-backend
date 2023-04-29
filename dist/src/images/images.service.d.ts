import { CreateImageDto } from '@/images/dto/create-image.dto';
import { Repository } from 'typeorm';
import { ImageEntity } from '@/images/entities/image.entity';
export declare class ImagesService {
    private readonly imagesRepository;
    constructor(imagesRepository: Repository<ImageEntity>);
    getAllImages(): Promise<ImageEntity[]>;
    getImageById(id: number): Promise<ImageEntity>;
    createImage(dto: CreateImageDto): Promise<ImageEntity>;
    deleteImageById(id: number): Promise<void>;
}
