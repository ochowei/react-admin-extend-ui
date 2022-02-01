# React Admin JSON view ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ochowei/react-admin-extend-ui/Node.js%20CI)

Some extend UI for [react-admin](https://github.com/marmelab/react-admin).

## Installation

```sh
npm install react-admin-extend-ui
```

## Usage

```jsx
import { IntegerInput } from "react-admin-extend-ui";

// ...

export const ExampleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <IntegerInput source="example"/>
    </SimpleForm>
  </Edit>
);
```
