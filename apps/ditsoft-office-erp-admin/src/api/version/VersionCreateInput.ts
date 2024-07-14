import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type VersionCreateInput = {
  versionNumber?: number | null;
  content?: string | null;
  document?: DocumentWhereUniqueInput | null;
};
