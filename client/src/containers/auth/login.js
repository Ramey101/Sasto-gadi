import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(10, "Invalid Phone Number")
    .max(10, "Invalid Phone Number")
    .required("Required"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be atleast 8 characters long"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Must enter the same password"
  ),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      registerEmail: "",
      phoneNumber: "",
      vehicleType: "",
      vehicleNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <h1> Login Form </h1>

          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type={"string"}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            // onClick={() => navigate("/vehicleRegister")}
            sx={{
              backgroundColor: "orange",
              margin: "auto",
              mt: "5rem",
              justifyContent: "center",
            }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
      <Button
        variant="contained"
        type="login"
        sx={{
          mt: "4rem",
          backgroundColor: "wheat",
        }}
      >
        <Link to={"/register"}>Create an Account</Link>
      </Button>
    </>
  );
};

export default Login;
