import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Pool } from '../models/pool.model';

@Injectable()
export class PoolService {
  constructor(
    @InjectRepository(Pool)
    private readonly poolRepository: Repository<Pool>,
  ) {}

  async upsert(pools: DeepPartial<Pool>[]) {
    return this.poolRepository.upsert(pools, {
      conflictPaths: ['pool'],
      skipUpdateIfNoValuesChanged: true,
    });
  }

  find() {
    return this.poolRepository.find();
  }
}
