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
import { OccupationalDoseList } from "./occupationalDose/OccupationalDoseList";
import { OccupationalDoseCreate } from "./occupationalDose/OccupationalDoseCreate";
import { OccupationalDoseEdit } from "./occupationalDose/OccupationalDoseEdit";
import { OccupationalDoseShow } from "./occupationalDose/OccupationalDoseShow";
import { HealthPhysicsStaffList } from "./healthPhysicsStaff/HealthPhysicsStaffList";
import { HealthPhysicsStaffCreate } from "./healthPhysicsStaff/HealthPhysicsStaffCreate";
import { HealthPhysicsStaffEdit } from "./healthPhysicsStaff/HealthPhysicsStaffEdit";
import { HealthPhysicsStaffShow } from "./healthPhysicsStaff/HealthPhysicsStaffShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
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
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
      </Admin>
    </div>
  );
};

export default App;
