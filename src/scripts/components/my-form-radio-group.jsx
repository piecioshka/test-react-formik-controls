import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Debug } from "./debug";

export const MyFormRadioGroup = () => {
  const [values, setValues] = useState({ agree: true });
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
            <h2>my form with radio group</h2>
            <Field name="agree">
              {({ field, form: { dirty }, meta }) => {
                console.debug("piecioshka, radio group", field, { dirty });
                const handleChange = (evt) => {
                  console.log(field.value);
                  field.onChange({
                    ...evt,
                    target: {
                      ...evt.target,
                      name: field.name,
                      value: evt.target.value === "1" ? true : false,
                    },
                  });
                };
                return (
                  <ul>
                    <li>
                      <label htmlFor="">
                        <input
                          name="agree"
                          type="radio"
                          checked={field.value}
                          onChange={handleChange}
                          value="1"
                        />{" "}
                        yes
                      </label>
                    </li>
                    <li>
                      <label htmlFor="">
                        <input
                          name="agree"
                          type="radio"
                          checked={field.value === false}
                          onChange={handleChange}
                          value="0"
                        />{" "}
                        no
                      </label>
                    </li>
                  </ul>
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
