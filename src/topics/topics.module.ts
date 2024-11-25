import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [TopicsController],
})
export class TopicsModule {}
