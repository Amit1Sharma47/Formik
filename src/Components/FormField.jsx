import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  password: "",
  gender: "male",
  email: "",
  date: "",
  address: "",
  phNumbers: [""],
};
const submitHandler = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
  email: Yup.string().email().required("Required!"),
  date: Yup.date().required("Required"),
  address: Yup.string().required("Required"),
});
const FormField = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
  });
  console.log(formik);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form>
        <Container maxWidth={"md"}>
          <Grid container>
            <Grid item md={6} sm={12}>
              <InputLabel>Name</InputLabel>

              <Field name="name">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <Box>
                      <TextField
                        size="small"
                        id="name"
                        type="text"
                        {...field}
                      />
                    </Box>
                  );
                }}
              </Field>

              <ErrorMessage name="name" component={TextError} />
            </Grid>
            <Grid item md={6} sm={12}>
              <InputLabel>Password</InputLabel>

              <Field name="password">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <Box>
                      <TextField
                        size="small"
                        id="password"
                        type="password"
                        {...field}
                      />
                    </Box>
                  );
                }}
              </Field>

              <ErrorMessage name="password" component={TextError} />
            </Grid>
            <Grid item md={6} sm={12}>
              <InputLabel>Email</InputLabel>
              <Field name="email">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <Box>
                      <TextField
                        size="small"
                        id="email"
                        type="email"
                        {...field}
                      />
                    </Box>
                  );
                }}
              </Field>

              <ErrorMessage name="email" component={TextError} />
              {/* <InputLabel>Gender</InputLabel>
            <Select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
            {formik.touched.date && formik.errors.gender ? (
              <Typography color="error">{formik.errors.gender}</Typography>
            ) : null} */}
            </Grid>
            <Grid item md={6} sm={12}>
              <InputLabel>Date</InputLabel>
              <Field name="date">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <Box>
                      <TextField
                        size="small"
                        id="date"
                        type="date"
                        {...field}
                      />
                    </Box>
                  );
                }}
              </Field>

              <ErrorMessage name="date" component={TextError} />
            </Grid>
            <Grid item md={6} sm={12}>
              <InputLabel>Address</InputLabel>
              <Field name="address">
                {(props) => {
                  const { field, form, meta } = props;

                  return (
                    <Box>
                      <TextField
                        size="small"
                        id="address"
                        type="text"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <Typography color="error">{meta.error}</Typography>
                      ) : null}
                    </Box>
                  );
                }}
              </Field>
            </Grid>
            <Grid item md={6} sm={12}>
              <InputLabel>Phone Numbers</InputLabel>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <Box>
                      {phNumbers.map((phNumbers, index) => (
                        <Box key={index}>
                          <TextField
                            name={`phNumbers[${index}]`}
                            size="small"
                          />
                          <br />
                          <Button
                            onClick={() => push(index)}
                            variant="outlined"
                            size="small"
                            color="secondary"
                          >
                            +
                          </Button>
                          {index > 0 ? (
                            <Button
                              variant="outlined"
                              size="small"
                              color="error"
                              onClick={() => remove(index)}
                            >
                              -
                            </Button>
                          ) : null}
                        </Box>
                      ))}
                    </Box>
                  );
                }}
              </FieldArray>
            </Grid>
          </Grid>
        </Container>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default FormField;
