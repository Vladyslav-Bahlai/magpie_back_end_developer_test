import { GraphQLQueryParams } from '../../../graphQL/types/graphQL.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class UniswapV3BaseService {
  abstract fetchPools<T>(params: GraphQLQueryParams): Promise<T>;
}
