import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VersionList } from "./version/VersionList";
import { VersionCreate } from "./version/VersionCreate";
import { VersionEdit } from "./version/VersionEdit";
import { VersionShow } from "./version/VersionShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { WorkflowList } from "./workflow/WorkflowList";
import { WorkflowCreate } from "./workflow/WorkflowCreate";
import { WorkflowEdit } from "./workflow/WorkflowEdit";
import { WorkflowShow } from "./workflow/WorkflowShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { OccupationalDoseList } from "./occupationalDose/OccupationalDoseList";
import { OccupationalDoseCreate } from "./occupationalDose/OccupationalDoseCreate";
import { OccupationalDoseEdit } from "./occupationalDose/OccupationalDoseEdit";
import { OccupationalDoseShow } from "./occupationalDose/OccupationalDoseShow";
import { HealthPhysicsStaffList } from "./healthPhysicsStaff/HealthPhysicsStaffList";
import { HealthPhysicsStaffCreate } from "./healthPhysicsStaff/HealthPhysicsStaffCreate";
import { HealthPhysicsStaffEdit } from "./healthPhysicsStaff/HealthPhysicsStaffEdit";
import { HealthPhysicsStaffShow } from "./healthPhysicsStaff/HealthPhysicsStaffShow";
import { TestTypeList } from "./testType/TestTypeList";
import { TestTypeCreate } from "./testType/TestTypeCreate";
import { TestTypeEdit } from "./testType/TestTypeEdit";
import { TestTypeShow } from "./testType/TestTypeShow";
import { LabTestResultList } from "./labTestResult/LabTestResultList";
import { LabTestResultCreate } from "./labTestResult/LabTestResultCreate";
import { LabTestResultEdit } from "./labTestResult/LabTestResultEdit";
import { LabTestResultShow } from "./labTestResult/LabTestResultShow";
import { LabTechnicianList } from "./labTechnician/LabTechnicianList";
import { LabTechnicianCreate } from "./labTechnician/LabTechnicianCreate";
import { LabTechnicianEdit } from "./labTechnician/LabTechnicianEdit";
import { LabTechnicianShow } from "./labTechnician/LabTechnicianShow";
import { MaintenanceScheduleList } from "./maintenanceSchedule/MaintenanceScheduleList";
import { MaintenanceScheduleCreate } from "./maintenanceSchedule/MaintenanceScheduleCreate";
import { MaintenanceScheduleEdit } from "./maintenanceSchedule/MaintenanceScheduleEdit";
import { MaintenanceScheduleShow } from "./maintenanceSchedule/MaintenanceScheduleShow";
import { EquipmentList } from "./equipment/EquipmentList";
import { EquipmentCreate } from "./equipment/EquipmentCreate";
import { EquipmentEdit } from "./equipment/EquipmentEdit";
import { EquipmentShow } from "./equipment/EquipmentShow";
import { MaintenanceLogList } from "./maintenanceLog/MaintenanceLogList";
import { MaintenanceLogCreate } from "./maintenanceLog/MaintenanceLogCreate";
import { MaintenanceLogEdit } from "./maintenanceLog/MaintenanceLogEdit";
import { MaintenanceLogShow } from "./maintenanceLog/MaintenanceLogShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { CustomerInteractionList } from "./customerInteraction/CustomerInteractionList";
import { CustomerInteractionCreate } from "./customerInteraction/CustomerInteractionCreate";
import { CustomerInteractionEdit } from "./customerInteraction/CustomerInteractionEdit";
import { CustomerInteractionShow } from "./customerInteraction/CustomerInteractionShow";
import { SalesOpportunityList } from "./salesOpportunity/SalesOpportunityList";
import { SalesOpportunityCreate } from "./salesOpportunity/SalesOpportunityCreate";
import { SalesOpportunityEdit } from "./salesOpportunity/SalesOpportunityEdit";
import { SalesOpportunityShow } from "./salesOpportunity/SalesOpportunityShow";
import { LeaveRequestList } from "./leaveRequest/LeaveRequestList";
import { LeaveRequestCreate } from "./leaveRequest/LeaveRequestCreate";
import { LeaveRequestEdit } from "./leaveRequest/LeaveRequestEdit";
import { LeaveRequestShow } from "./leaveRequest/LeaveRequestShow";
import { PayrollRecordList } from "./payrollRecord/PayrollRecordList";
import { PayrollRecordCreate } from "./payrollRecord/PayrollRecordCreate";
import { PayrollRecordEdit } from "./payrollRecord/PayrollRecordEdit";
import { PayrollRecordShow } from "./payrollRecord/PayrollRecordShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Ditsoft Office ERP"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Version"
          list={VersionList}
          edit={VersionEdit}
          create={VersionCreate}
          show={VersionShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="Workflow"
          list={WorkflowList}
          edit={WorkflowEdit}
          create={WorkflowCreate}
          show={WorkflowShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="OccupationalDose"
          list={OccupationalDoseList}
          edit={OccupationalDoseEdit}
          create={OccupationalDoseCreate}
          show={OccupationalDoseShow}
        />
        <Resource
          name="HealthPhysicsStaff"
          list={HealthPhysicsStaffList}
          edit={HealthPhysicsStaffEdit}
          create={HealthPhysicsStaffCreate}
          show={HealthPhysicsStaffShow}
        />
        <Resource
          name="TestType"
          list={TestTypeList}
          edit={TestTypeEdit}
          create={TestTypeCreate}
          show={TestTypeShow}
        />
        <Resource
          name="LabTestResult"
          list={LabTestResultList}
          edit={LabTestResultEdit}
          create={LabTestResultCreate}
          show={LabTestResultShow}
        />
        <Resource
          name="LabTechnician"
          list={LabTechnicianList}
          edit={LabTechnicianEdit}
          create={LabTechnicianCreate}
          show={LabTechnicianShow}
        />
        <Resource
          name="MaintenanceSchedule"
          list={MaintenanceScheduleList}
          edit={MaintenanceScheduleEdit}
          create={MaintenanceScheduleCreate}
          show={MaintenanceScheduleShow}
        />
        <Resource
          name="Equipment"
          list={EquipmentList}
          edit={EquipmentEdit}
          create={EquipmentCreate}
          show={EquipmentShow}
        />
        <Resource
          name="MaintenanceLog"
          list={MaintenanceLogList}
          edit={MaintenanceLogEdit}
          create={MaintenanceLogCreate}
          show={MaintenanceLogShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="CustomerInteraction"
          list={CustomerInteractionList}
          edit={CustomerInteractionEdit}
          create={CustomerInteractionCreate}
          show={CustomerInteractionShow}
        />
        <Resource
          name="SalesOpportunity"
          list={SalesOpportunityList}
          edit={SalesOpportunityEdit}
          create={SalesOpportunityCreate}
          show={SalesOpportunityShow}
        />
        <Resource
          name="LeaveRequest"
          list={LeaveRequestList}
          edit={LeaveRequestEdit}
          create={LeaveRequestCreate}
          show={LeaveRequestShow}
        />
        <Resource
          name="PayrollRecord"
          list={PayrollRecordList}
          edit={PayrollRecordEdit}
          create={PayrollRecordCreate}
          show={PayrollRecordShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
