"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsQueries = exports.GetTreesRequestByIdQuery = exports.GetAllTreesRequestsQuery = void 0;
class GetAllTreesRequestsQuery {
}
exports.GetAllTreesRequestsQuery = GetAllTreesRequestsQuery;
class GetTreesRequestByIdQuery {
    constructor(id) {
        this.id = id;
    }
}
exports.GetTreesRequestByIdQuery = GetTreesRequestByIdQuery;
exports.TreesRequestsQueries = {
    GetAllTreesRequestsQuery,
    GetTreesRequestByIdQuery,
};
//# sourceMappingURL=trees-requests.queries.js.map