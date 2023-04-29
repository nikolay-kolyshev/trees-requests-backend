"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsEvents = exports.DeleteTreesRequestByIdFailEvent = exports.DeleteTreesRequestByIdSuccessEvent = exports.DeleteTreesRequestByIdEvent = exports.CreateTreesRequestFailEvent = exports.CreateTreesRequestSuccessEvent = exports.CreateTreesRequestEvent = void 0;
class CreateTreesRequestEvent {
    constructor(dto) {
        this.dto = dto;
    }
}
exports.CreateTreesRequestEvent = CreateTreesRequestEvent;
class CreateTreesRequestSuccessEvent {
    constructor(tressRequest) {
        this.tressRequest = tressRequest;
    }
}
exports.CreateTreesRequestSuccessEvent = CreateTreesRequestSuccessEvent;
class CreateTreesRequestFailEvent {
    constructor(dto, error) {
        this.dto = dto;
        this.error = error;
    }
}
exports.CreateTreesRequestFailEvent = CreateTreesRequestFailEvent;
class DeleteTreesRequestByIdEvent {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteTreesRequestByIdEvent = DeleteTreesRequestByIdEvent;
class DeleteTreesRequestByIdSuccessEvent {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteTreesRequestByIdSuccessEvent = DeleteTreesRequestByIdSuccessEvent;
class DeleteTreesRequestByIdFailEvent {
    constructor(id, error) {
        this.id = id;
        this.error = error;
    }
}
exports.DeleteTreesRequestByIdFailEvent = DeleteTreesRequestByIdFailEvent;
exports.TreesRequestsEvents = {
    CreateTreesRequestEvent,
    CreateTreesRequestSuccessEvent,
    CreateTreesRequestFailEvent,
    DeleteTreesRequestByIdEvent,
    DeleteTreesRequestByIdSuccessEvent,
    DeleteTreesRequestByIdFailEvent,
};
//# sourceMappingURL=trees-requests.events.js.map