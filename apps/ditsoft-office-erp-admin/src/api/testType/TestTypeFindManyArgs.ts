import { TestTypeWhereInput } from "./TestTypeWhereInput";
import { TestTypeOrderByInput } from "./TestTypeOrderByInput";

export type TestTypeFindManyArgs = {
  where?: TestTypeWhereInput;
  orderBy?: Array<TestTypeOrderByInput>;
  skip?: number;
  take?: number;
};
