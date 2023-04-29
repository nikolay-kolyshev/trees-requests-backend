"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsView = void 0;
const abstract_entity_1 = require("../../common/entities/abstract.entity");
class TreesRequestsView extends abstract_entity_1.AbstractEntity {
    constructor(data) {
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
exports.TreesRequestsView = TreesRequestsView;
//# sourceMappingURL=trees-requests.view.js.map