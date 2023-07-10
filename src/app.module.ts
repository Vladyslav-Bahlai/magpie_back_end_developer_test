import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniswapModule } from './modules/uniswap/uniswap.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { PoolModule } from './modules/pool/pool.module';
import { ScheduledTaskModule } from './modules/shcheduled-task/scheduled-task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UniswapModule,
    PoolModule,
    ScheduledTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
