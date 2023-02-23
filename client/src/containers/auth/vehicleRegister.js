import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";

const RegisterSchema = Yup.object().shape({
  vehicleType: Yup.string().required("Vehicle Type is Required"),
  makeYear: Yup.string(),
  vehicleDetails: Yup.string().email("Invalid Email").optional(),
  vehicleNumber: Yup.string()
    .min(5, "Invalid Vehicle Number")
    .required("Required"),
});

const VehicleRegister = () => {
  const formik = useFormik({
    initialValues: {
      vehicleType: "",
      makeYear: "",
      vehicleDetails: "",
      vehicleNumber: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <h1> Vechile Register Form </h1>
        <TextField
          placeholder="Car / Bike "
          fullWidth
          labelId="vehicleTypeLabel"
          id="vehicleType"
          name="vehicleType"
          value={formik.values.vehicleType}
          onChange={formik.handleChange}
          error={
            formik.touched.vehicleType && Boolean(formik.errors.vehicleType)
          }
          helperText={formik.touched.vehicleType && formik.errors.vehicleType}
        ></TextField>

        <TextField
          fullWidth
          id="makeYear"
          name="makeYear"
          label="Make Year"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          fullWidth
          id="vehileDetails"
          name="vehileDetails"
          label="Vehicle Details"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          id="vehicleNumber"
          name="vehicleNumber"
          label="Vehicle Number"
          value={formik.values.vehicleNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)
          }
          helperText={formik.touched.vehicleNumber && formik.errors.vehicleType}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ mt: "2rem", bgcolor: "orange" }}
        >
          Puplish
        </Button>
      </form>
    </Box>
  );
};

export default VehicleRegister;
