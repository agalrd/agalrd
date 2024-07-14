import { Employee } from "../employee/Employee";

export type LeaveRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  status?: "Option1" | null;
  employee?: Employee | null;
};
