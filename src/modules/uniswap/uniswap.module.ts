import { Module } from '@nestjs/common';
import { UniswapV3Service } from './services/v3/uniswap-v3.service';
import { UniswapV3BaseService } from './services/v3/uniswap-v3.base-service';

@Module({
  providers: [
    {
      provide: UniswapV3BaseService,
      useClass: UniswapV3Service,
    },
  ],
  exports: [UniswapV3BaseService],
})
export class UniswapModule {}
