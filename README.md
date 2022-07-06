# React Admin Extend UI ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ochowei/react-admin-extend-ui/Node.js%20CI)

Some extend UI for [react-admin](https://github.com/marmelab/react-admin).

## Installation

```sh
npm install react-admin-extend-ui
```

## Usage

```jsx
import { IntegerInput, UnsignedIntegerInput, PositiveIntegerInput } from "react-admin-extend-ui";

// ...

export const ExampleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <IntegerInput source="field1"/>
      <UnsignedIntegerInput source="field2"/>
      <PositiveIntegerInput source="field3"/>
    </SimpleForm>
  </Edit>
);
```
