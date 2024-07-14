import { Version as TVersion } from "../api/version/Version";

export const VERSION_TITLE_FIELD = "id";

export const VersionTitle = (record: TVersion): string => {
  return record.id?.toString() || String(record.id);
};
