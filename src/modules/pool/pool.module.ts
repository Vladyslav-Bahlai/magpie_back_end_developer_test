import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pool } from './models/pool.model';
import { PoolService } from './services/pool.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pool])],
  providers: [PoolService],
  exports: [PoolService],
})
export class PoolModule {}
