import { Module } from "@nestjs/common";
import { TestTypeModuleBase } from "./base/testType.module.base";
import { TestTypeService } from "./testType.service";
import { TestTypeController } from "./testType.controller";
import { TestTypeResolver } from "./testType.resolver";

@Module({
  imports: [TestTypeModuleBase],
  controllers: [TestTypeController],
  providers: [TestTypeService, TestTypeResolver],
  exports: [TestTypeService],
})
export class TestTypeModule {}
