import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().min(5, "Too Short").required("Required"),
  registerEmail: Yup.string().email("Invalid Email").optional(),
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

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      registerEmail: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const submitFormData = async (values) => {
    const Values = { values };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Values),
    };
    const res = await fetch("http://localhost:3000/register", requestOptions);
    debugger;
    // const data = await res.json()
    // 	navigate(props.onSuccessNavigation)
    // if(res.status  && data.message){
    //   dispatch(setAlertMessages(data.message))
    // }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form
        initialValues={{}}
        onSubmit={(values) => submitFormData(values)}
        //  validationSchema={schema}
      >
        <h1> Sign up Form </h1>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          id="registerEmail"
          name="registerEmail"
          label="Email Address"
          value={formik.values.registerEmail}
          onChange={formik.handleChange}
          error={
            formik.touched.registerEmail && Boolean(formik.errors.registerEmail)
          }
          helperText={
            formik.touched.registerEmail && formik.errors.registerEmail
          }
        />

        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          type={"number"}
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

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type={"password"}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
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
          Sign up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
