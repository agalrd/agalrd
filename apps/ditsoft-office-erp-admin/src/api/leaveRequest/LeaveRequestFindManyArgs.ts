import { LeaveRequestWhereInput } from "./LeaveRequestWhereInput";
import { LeaveRequestOrderByInput } from "./LeaveRequestOrderByInput";

export type LeaveRequestFindManyArgs = {
  where?: LeaveRequestWhereInput;
  orderBy?: Array<LeaveRequestOrderByInput>;
  skip?: number;
  take?: number;
};
