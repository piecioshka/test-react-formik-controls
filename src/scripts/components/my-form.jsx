import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

export const MyForm = () => {
  const [values, setValues] = useState({ rules: true });
  return (
    <Formik
      initialValues={values}
      onSubmit={(newValues) => {
        console.debug("piecioshka, onSubmit", { values, newValues });
        setValues(newValues);
      }}
    >
      {() => {
        console.debug("piecioshka, render");
        return (
          <Form>
            <h2>my form</h2>
            <Field name="rules">
              {({ field, form: { dirty }, meta }) => {
                console.debug("piecioshka, field", field, { dirty }, meta);
                return (
                  <input
                    name="rules"
                    type="checkbox"
                    checked={field.value}
                    onChange={(evt) => {
                      field.onChange(evt);
                    }}
                  />
                );
              }}
            </Field>
          </Form>
        );
      }}
    </Formik>
  );
};
