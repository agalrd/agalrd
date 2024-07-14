import { CustomerInteractionWhereInput } from "./CustomerInteractionWhereInput";
import { CustomerInteractionOrderByInput } from "./CustomerInteractionOrderByInput";

export type CustomerInteractionFindManyArgs = {
  where?: CustomerInteractionWhereInput;
  orderBy?: Array<CustomerInteractionOrderByInput>;
  skip?: number;
  take?: number;
};
