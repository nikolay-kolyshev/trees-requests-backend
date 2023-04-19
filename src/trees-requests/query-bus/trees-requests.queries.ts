export class GetAllTreesRequestsQuery {}
export class GetTreesRequestByIdQuery {
  constructor(public readonly id: number) {}
}

export const TreesRequestsQueries = {
  GetAllTreesRequestsQuery,
  GetTreesRequestByIdQuery,
};
