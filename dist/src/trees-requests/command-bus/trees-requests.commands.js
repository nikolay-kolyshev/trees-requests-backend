"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsCommands = exports.DeleteTreesRequestByIdCommand = exports.CreateTreesRequestCommand = void 0;
class CreateTreesRequestCommand {
    constructor(dto) {
        this.dto = dto;
    }
}
exports.CreateTreesRequestCommand = CreateTreesRequestCommand;
class DeleteTreesRequestByIdCommand {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteTreesRequestByIdCommand = DeleteTreesRequestByIdCommand;
exports.TreesRequestsCommands = {
    CreateTreesRequestCommand,
    DeleteTreesRequestByIdCommand,
};
//# sourceMappingURL=trees-requests.commands.js.map