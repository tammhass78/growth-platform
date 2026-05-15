import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
  ) {}

  @Post()
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
  }

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @UseGuards(JwtGuard)
  @Post('complete')
  completeTask(
    @Req() req: any,
    @Body() body: { taskId: number },
  ) {
    return this.tasksService.completeTask(
      req.user.sub,
      body.taskId,
    );
  }
}