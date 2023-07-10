import { Module } from '@nestjs/common';
import { ScheduledTaskService } from './services/scheduled-task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { UniswapModule } from '../uniswap/uniswap.module';
import { PoolModule } from '../pool/pool.module';

@Module({
  imports: [ScheduleModule.forRoot(), UniswapModule, PoolModule],
  providers: [ScheduledTaskService],
})
export class ScheduledTaskModule {}
