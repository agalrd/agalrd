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
import { DocumentService } from "../document.service";
import { DocumentCreateInput } from "./DocumentCreateInput";
import { Document } from "./Document";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentWhereUniqueInput } from "./DocumentWhereUniqueInput";
import { DocumentUpdateInput } from "./DocumentUpdateInput";
import { WorkflowFindManyArgs } from "../../workflow/base/WorkflowFindManyArgs";
import { Workflow } from "../../workflow/base/Workflow";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";
import { VersionFindManyArgs } from "../../version/base/VersionFindManyArgs";
import { Version } from "../../version/base/Version";
import { VersionWhereUniqueInput } from "../../version/base/VersionWhereUniqueInput";

export class DocumentControllerBase {
  constructor(protected readonly service: DocumentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Document })
  async createDocument(
    @common.Body() data: DocumentCreateInput
  ): Promise<Document> {
    return await this.service.createDocument({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        documentVersion: true,
        workflowStatus: true,
        metadata: true,
        checkedOutBy: true,
        checkedOutAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Document] })
  @ApiNestedQuery(DocumentFindManyArgs)
  async documents(@common.Req() request: Request): Promise<Document[]> {
    const args = plainToClass(DocumentFindManyArgs, request.query);
    return this.service.documents({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        documentVersion: true,
        workflowStatus: true,
        metadata: true,
        checkedOutBy: true,
        checkedOutAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async document(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    const result = await this.service.document({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        documentVersion: true,
        workflowStatus: true,
        metadata: true,
        checkedOutBy: true,
        checkedOutAt: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocument(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() data: DocumentUpdateInput
  ): Promise<Document | null> {
    try {
      return await this.service.updateDocument({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          content: true,
          documentVersion: true,
          workflowStatus: true,
          metadata: true,
          checkedOutBy: true,
          checkedOutAt: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocument(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    try {
      return await this.service.deleteDocument({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          content: true,
          documentVersion: true,
          workflowStatus: true,
          metadata: true,
          checkedOutBy: true,
          checkedOutAt: true,
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

  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowFindManyArgs)
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Workflow[]> {
    const query = plainToClass(WorkflowFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        step: true,
        dueDate: true,
        status: true,
        assignedTo: true,

        document: {
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

  @common.Post("/:id/workflows")
  async connectWorkflows(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  async updateWorkflows(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  async disconnectWorkflows(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/versions")
  @ApiNestedQuery(VersionFindManyArgs)
  async findVersions(
    @common.Req() request: Request,
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Version[]> {
    const query = plainToClass(VersionFindManyArgs, request.query);
    const results = await this.service.findVersions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        versionNumber: true,
        content: true,

        document: {
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

  @common.Post("/:id/versions")
  async connectVersions(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: VersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      versions: {
        connect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/versions")
  async updateVersions(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: VersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      versions: {
        set: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/versions")
  async disconnectVersions(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: VersionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      versions: {
        disconnect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }
}
