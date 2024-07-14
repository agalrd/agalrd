import * as graphql from "@nestjs/graphql";
import { TestTypeResolverBase } from "./base/testType.resolver.base";
import { TestType } from "./base/TestType";
import { TestTypeService } from "./testType.service";

@graphql.Resolver(() => TestType)
export class TestTypeResolver extends TestTypeResolverBase {
  constructor(protected readonly service: TestTypeService) {
    super(service);
  }
}
