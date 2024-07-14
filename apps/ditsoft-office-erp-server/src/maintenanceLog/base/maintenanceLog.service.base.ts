/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MaintenanceLog as PrismaMaintenanceLog } from "@prisma/client";

export class MaintenanceLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MaintenanceLogCountArgs, "select">
  ): Promise<number> {
    return this.prisma.maintenanceLog.count(args);
  }

  async maintenanceLogs(
    args: Prisma.MaintenanceLogFindManyArgs
  ): Promise<PrismaMaintenanceLog[]> {
    return this.prisma.maintenanceLog.findMany(args);
  }
  async maintenanceLog(
    args: Prisma.MaintenanceLogFindUniqueArgs
  ): Promise<PrismaMaintenanceLog | null> {
    return this.prisma.maintenanceLog.findUnique(args);
  }
  async createMaintenanceLog(
    args: Prisma.MaintenanceLogCreateArgs
  ): Promise<PrismaMaintenanceLog> {
    return this.prisma.maintenanceLog.create(args);
  }
  async updateMaintenanceLog(
    args: Prisma.MaintenanceLogUpdateArgs
  ): Promise<PrismaMaintenanceLog> {
    return this.prisma.maintenanceLog.update(args);
  }
  async deleteMaintenanceLog(
    args: Prisma.MaintenanceLogDeleteArgs
  ): Promise<PrismaMaintenanceLog> {
    return this.prisma.maintenanceLog.delete(args);
  }
}
