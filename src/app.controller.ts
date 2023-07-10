import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PoolService } from './modules/pool/services/pool.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly poolService: PoolService,
  ) {}

  @Get('/pools')
  async getPools() {
    return this.poolService.find();
  }
}
