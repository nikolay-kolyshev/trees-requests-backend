/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { ImagesService } from '@/images/images.service';
export declare class ImagesController {
    private imagesService;
    constructor(imagesService: ImagesService);
    getALllCities(): Promise<import("./entities/image.entity").ImageEntity[]>;
    getImageById(id: number, res: any): Promise<StreamableFile>;
    createImage(image: Express.Multer.File): Promise<import("./entities/image.entity").ImageEntity>;
    deleteImageById(id: number): Promise<void>;
}
