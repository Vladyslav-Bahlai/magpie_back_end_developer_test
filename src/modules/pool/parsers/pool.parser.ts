import { UniswapPool } from '../../uniswap/types/uniswap.types';
import { Pool } from '../models/pool.model';
import { DeepPartial } from 'typeorm';

export class PoolParser {
  static parseUniswapPools(pools: UniswapPool[]): DeepPartial<Pool>[] {
    return pools.map((pool) => ({
      pool: pool.id,
      token0: pool.token0.id,
      token1: pool.token1.id,
    }));
  }
}
