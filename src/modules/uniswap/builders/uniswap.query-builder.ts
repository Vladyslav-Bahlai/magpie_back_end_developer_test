import { GraphQLQueryParams } from '../../graphQL/types/graphQL.types';
import { GraphQLUtils } from '../../graphQL/utils/graphQL.utils';
import { gql } from 'graphql-request';

export class UniswapGraphQLQueryBuilder {
  static getPoolsQuery(params: GraphQLQueryParams) {
    const paramsStr = GraphQLUtils.parseQueryParams(params);

    return gql`
      {
        pairs${paramsStr} {
          id
          token0 {
            id
          }
          token1 {
            id
          }
        }
      }
    `;
  }
}
