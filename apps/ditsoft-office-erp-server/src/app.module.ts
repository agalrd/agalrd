import { Module } from "@nestjs/common";
import { VersionModule } from "./version/version.module";
import { DocumentModule } from "./document/document.module";
import { WorkflowModule } from "./workflow/workflow.module";
import { UserModule } from "./user/user.module";
import { ClientModule } from "./client/client.module";
import { OccupationalDoseModule } from "./occupationalDose/occupationalDose.module";
import { HealthPhysicsStaffModule } from "./healthPhysicsStaff/healthPhysicsStaff.module";
import { TestTypeModule } from "./testType/testType.module";
import { LabTestResultModule } from "./labTestResult/labTestResult.module";
import { LabTechnicianModule } from "./labTechnician/labTechnician.module";
import { MaintenanceScheduleModule } from "./maintenanceSchedule/maintenanceSchedule.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { MaintenanceLogModule } from "./maintenanceLog/maintenanceLog.module";
import { LeadModule } from "./lead/lead.module";
import { CustomerInteractionModule } from "./customerInteraction/customerInteraction.module";
import { SalesOpportunityModule } from "./salesOpportunity/salesOpportunity.module";
import { LeaveRequestModule } from "./leaveRequest/leaveRequest.module";
import { PayrollRecordModule } from "./payrollRecord/payrollRecord.module";
import { EmployeeModule } from "./employee/employee.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    VersionModule,
    DocumentModule,
    WorkflowModule,
    UserModule,
    ClientModule,
    OccupationalDoseModule,
    HealthPhysicsStaffModule,
    TestTypeModule,
    LabTestResultModule,
    LabTechnicianModule,
    MaintenanceScheduleModule,
    EquipmentModule,
    MaintenanceLogModule,
    LeadModule,
    CustomerInteractionModule,
    SalesOpportunityModule,
    LeaveRequestModule,
    PayrollRecordModule,
    EmployeeModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
