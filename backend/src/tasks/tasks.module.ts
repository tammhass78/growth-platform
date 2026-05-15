import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

import { PrismaModule } from '../prisma/prisma.module';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,

    JwtModule.register({
      secret: 'SUPER_SECRET_KEY',
    }),
  ],

  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}