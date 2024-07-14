import * as graphql from "@nestjs/graphql";
import { LeaveRequestResolverBase } from "./base/leaveRequest.resolver.base";
import { LeaveRequest } from "./base/LeaveRequest";
import { LeaveRequestService } from "./leaveRequest.service";

@graphql.Resolver(() => LeaveRequest)
export class LeaveRequestResolver extends LeaveRequestResolverBase {
  constructor(protected readonly service: LeaveRequestService) {
    super(service);
  }
}
