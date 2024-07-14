import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentServiceBase } from "./base/equipment.service.base";

@Injectable()
export class EquipmentService extends EquipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
