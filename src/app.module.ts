import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArticlesModule } from './articles/articles.module'
import { AuthModule } from './auth/auth.module'
import { EpisodesModule } from './episodes/episodes.module'
import { PrismaModule } from './prisma/prisma.module'
import { TopicsModule } from './topics/topics.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    EpisodesModule,
    TopicsModule,
    AuthModule,
    PrismaModule,
    ArticlesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
