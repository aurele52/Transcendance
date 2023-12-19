import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { PrismaModule } from './prisma/prisma.module';
import { PongGateway } from './pong/pong.gateway';

@Module({
  imports: [ListModule, PrismaModule],

  controllers: [AppController],
  providers: [AppService, PongGateway],
})
export class AppModule {}
