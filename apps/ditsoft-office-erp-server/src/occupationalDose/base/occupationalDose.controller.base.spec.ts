import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OccupationalDoseController } from "../occupationalDose.controller";
import { OccupationalDoseService } from "../occupationalDose.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  hp10: 42.42,
  hp0_7: 42.42,
  measurementDate: new Date(),
  employeeId: "exampleEmployeeId",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  hp10: 42.42,
  hp0_7: 42.42,
  measurementDate: new Date(),
  employeeId: "exampleEmployeeId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    hp10: 42.42,
    hp0_7: 42.42,
    measurementDate: new Date(),
    employeeId: "exampleEmployeeId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  hp10: 42.42,
  hp0_7: 42.42,
  measurementDate: new Date(),
  employeeId: "exampleEmployeeId",
};

const service = {
  createOccupationalDose() {
    return CREATE_RESULT;
  },
  occupationalDoses: () => FIND_MANY_RESULT,
  occupationalDose: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("OccupationalDose", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OccupationalDoseService,
          useValue: service,
        },
      ],
      controllers: [OccupationalDoseController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /occupationalDoses", async () => {
    await request(app.getHttpServer())
      .post("/occupationalDoses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        measurementDate: CREATE_RESULT.measurementDate.toISOString(),
      });
  });

  test("GET /occupationalDoses", async () => {
    await request(app.getHttpServer())
      .get("/occupationalDoses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          measurementDate: FIND_MANY_RESULT[0].measurementDate.toISOString(),
        },
      ]);
  });

  test("GET /occupationalDoses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/occupationalDoses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /occupationalDoses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/occupationalDoses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        measurementDate: FIND_ONE_RESULT.measurementDate.toISOString(),
      });
  });

  test("POST /occupationalDoses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/occupationalDoses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        measurementDate: CREATE_RESULT.measurementDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/occupationalDoses")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
