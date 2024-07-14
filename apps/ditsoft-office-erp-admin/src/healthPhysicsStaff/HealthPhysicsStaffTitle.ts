import { HealthPhysicsStaff as THealthPhysicsStaff } from "../api/healthPhysicsStaff/HealthPhysicsStaff";

export const HEALTHPHYSICSSTAFF_TITLE_FIELD = "firstName";

export const HealthPhysicsStaffTitle = (
  record: THealthPhysicsStaff
): string => {
  return record.firstName?.toString() || String(record.id);
};
