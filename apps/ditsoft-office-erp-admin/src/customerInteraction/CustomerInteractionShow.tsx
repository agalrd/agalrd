import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CustomerInteractionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="InteractionDate" source="interactionDate" />
        <TextField label="Notes" source="notes" />
        <TextField label="InteractionType" source="interactionType" />
        <TextField label="CustomerId" source="customerId" />
      </SimpleShowLayout>
    </Show>
  );
};
