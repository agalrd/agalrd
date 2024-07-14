import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabTestResultServiceBase } from "./base/labTestResult.service.base";

@Injectable()
export class LabTestResultService extends LabTestResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
