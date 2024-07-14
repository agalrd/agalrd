import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";

export const VersionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="VersionNumber" source="versionNumber" />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
