import React from "react";
import { MyFormCheckbox } from "./my-form-checkbox";
import { MyFormRadioGroup } from "./my-form-radio-group";

export const App = () => {
  return (
    <div>
      <h1>test-react-formik-controls</h1>
      <MyFormCheckbox />
      <MyFormRadioGroup />
    </div>
  );
};
