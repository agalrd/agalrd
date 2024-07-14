import { Employee } from "../employee/Employee";

export type PayrollRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paymentDate: Date | null;
  amount: number | null;
  notes: string | null;
  employee?: Employee | null;
};
