// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { IntegerInput } from "./IntegerInput";
import { PositiveIntegerInput } from "./PositiveIntegerInput";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="id"></NumberInput>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <PositiveIntegerInput source="example2" />
    </SimpleForm>
  </Create>
);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} create={PostCreate} />
  </Admin>
);
export default App;
