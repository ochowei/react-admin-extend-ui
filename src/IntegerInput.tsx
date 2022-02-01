import React from "react";

import { NumberInput } from "react-admin";
const IntegerInput = (props: any) => {
  return (
    <NumberInput
      parse={(value: string) => {
        // const reg = /^\d+$/;
        const parsed = parseInt(value);
        return isNaN(parsed) ? null : parsed;
      }}
      onKeyDown={(e) => {
        const notAllow = ["e", "E", "+", "*", "/", "."];
        notAllow.includes(e.key) && e.preventDefault();
      }}
      {...props}
    />
  );
};
export { IntegerInput };
