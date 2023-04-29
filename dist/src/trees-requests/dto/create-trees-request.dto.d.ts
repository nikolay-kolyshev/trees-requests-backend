/// <reference types="multer" />
export declare class CreateTreesRequestDto {
    readonly name: string;
    readonly description: string;
    readonly coordinatesAccuracy: string;
    readonly coordinatesLatitude: string;
    readonly coordinatesLongitude: string;
    readonly image: Express.Multer.File;
}
