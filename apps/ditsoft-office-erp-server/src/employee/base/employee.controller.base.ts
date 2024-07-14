/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmployeeService } from "../employee.service";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { LeaveRequestFindManyArgs } from "../../leaveRequest/base/LeaveRequestFindManyArgs";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { LeaveRequestWhereUniqueInput } from "../../leaveRequest/base/LeaveRequestWhereUniqueInput";
import { PayrollRecordFindManyArgs } from "../../payrollRecord/base/PayrollRecordFindManyArgs";
import { PayrollRecord } from "../../payrollRecord/base/PayrollRecord";
import { PayrollRecordWhereUniqueInput } from "../../payrollRecord/base/PayrollRecordWhereUniqueInput";

export class EmployeeControllerBase {
  constructor(protected readonly service: EmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        position: true,
        firstName: true,
        startDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        position: true,
        firstName: true,
        startDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        position: true,
        firstName: true,
        startDate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastName: true,
          email: true,
          position: true,
          firstName: true,
          startDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastName: true,
          email: true,
          position: true,
          firstName: true,
          startDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/leaveRequests")
  @ApiNestedQuery(LeaveRequestFindManyArgs)
  async findLeaveRequests(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<LeaveRequest[]> {
    const query = plainToClass(LeaveRequestFindManyArgs, request.query);
    const results = await this.service.findLeaveRequests(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startDate: true,
        endDate: true,
        status: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/leaveRequests")
  async connectLeaveRequests(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: LeaveRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaveRequests: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/leaveRequests")
  async updateLeaveRequests(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: LeaveRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaveRequests: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/leaveRequests")
  async disconnectLeaveRequests(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: LeaveRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaveRequests: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/payrollRecords")
  @ApiNestedQuery(PayrollRecordFindManyArgs)
  async findPayrollRecords(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<PayrollRecord[]> {
    const query = plainToClass(PayrollRecordFindManyArgs, request.query);
    const results = await this.service.findPayrollRecords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        paymentDate: true,
        amount: true,
        notes: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payrollRecords")
  async connectPayrollRecords(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrollRecords: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payrollRecords")
  async updatePayrollRecords(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrollRecords: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payrollRecords")
  async disconnectPayrollRecords(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrollRecords: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
