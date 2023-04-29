export declare class GetAllTreesRequestsQuery {
}
export declare class GetTreesRequestByIdQuery {
    readonly id: number;
    constructor(id: number);
}
export declare const TreesRequestsQueries: {
    GetAllTreesRequestsQuery: typeof GetAllTreesRequestsQuery;
    GetTreesRequestByIdQuery: typeof GetTreesRequestByIdQuery;
};
