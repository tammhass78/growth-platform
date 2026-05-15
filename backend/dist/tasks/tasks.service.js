"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TasksService = class TasksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTask(data) {
        return this.prisma.task.create({
            data,
        });
    }
    async getTasks() {
        return this.prisma.task.findMany();
    }
    async completeTask(userId, taskId) {
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
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map