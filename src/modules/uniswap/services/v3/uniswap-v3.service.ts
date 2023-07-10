import { Injectable, Logger } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { UNISWAP_V3_API_URL } from '../../constants/uniswap.constants';
import { UniswapGraphQLQueryBuilder } from '../../builders/uniswap.query-builder';
import { GraphQLQueryParams } from '../../../graphQL/types/graphQL.types';
import { UniswapV3BaseService } from './uniswap-v3.base-service';

@Injectable()
export class UniswapV3Service extends UniswapV3BaseService {
  private readonly logger = new Logger(UniswapV3Service.name);
  private readonly url: string;
  private readonly _client: GraphQLClient;

  constructor() {
    super();
    this.url = UNISWAP_V3_API_URL;
    this._client = new GraphQLClient(this.url);
  }

  private async sendRequest<T>(query: string): Promise<T> {
    this.logger.log('Sending query to UniswapV3 API: ' + query);

    return this._client.request<T>(query);
  }

  async fetchPools<T>(params: GraphQLQueryParams): Promise<T> {
    const query = UniswapGraphQLQueryBuilder.getPoolsQuery(params);

    return this.sendRequest<T>(query);
  }
}
