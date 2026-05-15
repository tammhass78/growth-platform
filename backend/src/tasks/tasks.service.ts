import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: {
    title: string;
    points: number;
    url: string;
    platform: string;
  }) {
    return this.prisma.task.create({
      data,
    });
  }

  async getTasks() {
    return this.prisma.task.findMany();
  }

  async completeTask(userId: number, taskId: number) {
    // 1. التأكد أن المهمة موجودة
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new Error('Task not found');
    }

    // 2. التأكد أن المستخدم لم ينفذ المهمة مسبقًا
    const existingCompletion = await this.prisma.userTask.findUnique({
      where: {
        userId_taskId: {
          userId,
          taskId,
        },
      },
    });

    if (existingCompletion) {
      throw new Error('Task already completed');
    }

    // 3. تسجيل تنفيذ المهمة
    await this.prisma.$transaction([
  this.prisma.userTask.create({
    data: {
      userId,
      taskId,
    },
  }),

  this.prisma.user.update({
    where: { id: userId },
    data: {
      points: {
        increment: task.points,
      },
    },
  }),
]);

    return {
      message: 'Task completed successfully',
      pointsEarned: task.points,
    };
  }
}