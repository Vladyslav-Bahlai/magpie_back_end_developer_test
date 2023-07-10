import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ScheduledTasksNames } from '../enums/scheduled-task.enums';
import { UniswapV3BaseService } from '../../uniswap/services/v3/uniswap-v3.base-service';
import { PoolService } from '../../pool/services/pool.service';
import { UniswapResponse } from '../../uniswap/types/uniswap.types';
import { PoolParser } from '../../pool/parsers/pool.parser';
import { GraphQLQueryParams } from '../../graphQL/types/graphQL.types';
import {
  FIRST_PARAM_MAX_VALUE,
  SKIP_PARAM_MAX_VALUE,
} from '../../uniswap/constants/uniswap.constants';

@Injectable()
export class ScheduledTaskService {
  private readonly logger = new Logger(ScheduledTaskService.name);

  constructor(
    private readonly uniswapV3Service: UniswapV3BaseService,
    private readonly poolService: PoolService,
  ) {}

  @Cron(CronExpression.EVERY_30_MINUTES, {
    name: ScheduledTasksNames.FETCH_POOLS_FROM_UNISWAP,
  })
  async fetchPoolsFromUniswap() {
    this.logger.log(
      `Cron job ${ScheduledTasksNames.FETCH_POOLS_FROM_UNISWAP} started.'`,
    );

    try {
      const params: GraphQLQueryParams = {
        first: FIRST_PARAM_MAX_VALUE,
        skip: 0,
      };

      while (params.skip <= SKIP_PARAM_MAX_VALUE) {
        const response =
          await this.uniswapV3Service.fetchPools<UniswapResponse>(params);

        const pools = PoolParser.parseUniswapPools(response.pools);
        await this.poolService.upsert(pools);

        params.skip += params.first;
      }
    } catch (e) {
      this.logger.error(e);
    }

    this.logger.log(
      `Cron job ${ScheduledTasksNames.FETCH_POOLS_FROM_UNISWAP} finished.'`,
    );
  }
}
