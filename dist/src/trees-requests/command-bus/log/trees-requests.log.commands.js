"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsLogCommands = exports.DeleteTreesRequestByIdFailLogCommand = exports.DeleteTreesRequestByIdSuccessLogCommand = exports.DeleteTreesRequestByIdLogCommand = exports.CreateTreesRequestFailLogCommand = exports.CreateTreesRequestSuccessLogCommand = exports.CreateTreesRequestLogCommand = void 0;
class CreateTreesRequestLogCommand {
    constructor(dto) {
        this.dto = dto;
    }
}
exports.CreateTreesRequestLogCommand = CreateTreesRequestLogCommand;
class CreateTreesRequestSuccessLogCommand {
    constructor(treesRequest) {
        this.treesRequest = treesRequest;
    }
}
exports.CreateTreesRequestSuccessLogCommand = CreateTreesRequestSuccessLogCommand;
class CreateTreesRequestFailLogCommand {
    constructor(dto, error) {
        this.dto = dto;
        this.error = error;
    }
}
exports.CreateTreesRequestFailLogCommand = CreateTreesRequestFailLogCommand;
class DeleteTreesRequestByIdLogCommand {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteTreesRequestByIdLogCommand = DeleteTreesRequestByIdLogCommand;
class DeleteTreesRequestByIdSuccessLogCommand {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteTreesRequestByIdSuccessLogCommand = DeleteTreesRequestByIdSuccessLogCommand;
class DeleteTreesRequestByIdFailLogCommand {
    constructor(id, error) {
        this.id = id;
        this.error = error;
    }
}
exports.DeleteTreesRequestByIdFailLogCommand = DeleteTreesRequestByIdFailLogCommand;
exports.TreesRequestsLogCommands = {
    CreateTreesRequestLogCommand,
    CreateTreesRequestSuccessLogCommand,
    CreateTreesRequestFailLogCommand,
    DeleteTreesRequestByIdLogCommand,
    DeleteTreesRequestByIdSuccessLogCommand,
    DeleteTreesRequestByIdFailLogCommand,
};
//# sourceMappingURL=trees-requests.log.commands.js.map