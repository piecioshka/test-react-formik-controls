import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Debug } from "./debug";

export const MyFormCheckbox = () => {
  const [values, setValues] = useState({ rules: true });
  return (
    <Formik
      initialValues={values}
      onSubmit={(newValues) => {
        // console.debug("piecioshka, onSubmit", { values, newValues });
        setValues(newValues);
      }}
    >
      {() => {
        return (
          <Form>
            <h2>my form with checkboxes</h2>
            <Field name="rules">
              {({ field, form: { dirty }, meta }) => {
                console.debug("piecioshka, checkbox", field, { dirty });
                return (
                  <label>
                    <input
                      name="rules"
                      type="checkbox"
                      checked={field.value}
                      onChange={(evt) => {
                        field.onChange(evt);
                      }}
                    />
                    accept rules
                  </label>
                );
              }}
            </Field>
            <Debug />
          </Form>
        );
      }}
    </Formik>
  );
};
