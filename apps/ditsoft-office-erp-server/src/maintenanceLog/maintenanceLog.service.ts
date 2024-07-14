import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceLogServiceBase } from "./base/maintenanceLog.service.base";

@Injectable()
export class MaintenanceLogService extends MaintenanceLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
