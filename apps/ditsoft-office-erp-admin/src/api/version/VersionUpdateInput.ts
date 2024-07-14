import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type VersionUpdateInput = {
  versionNumber?: number | null;
  content?: string | null;
  document?: DocumentWhereUniqueInput | null;
};
