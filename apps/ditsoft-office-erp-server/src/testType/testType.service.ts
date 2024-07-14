import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestTypeServiceBase } from "./base/testType.service.base";

@Injectable()
export class TestTypeService extends TestTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
