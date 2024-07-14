import * as graphql from "@nestjs/graphql";
import { LabTestResultResolverBase } from "./base/labTestResult.resolver.base";
import { LabTestResult } from "./base/LabTestResult";
import { LabTestResultService } from "./labTestResult.service";

@graphql.Resolver(() => LabTestResult)
export class LabTestResultResolver extends LabTestResultResolverBase {
  constructor(protected readonly service: LabTestResultService) {
    super(service);
  }
}
