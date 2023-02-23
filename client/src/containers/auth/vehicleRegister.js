import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";

const RegisterSchema = Yup.object().shape({
  vehicleType: Yup.string().required("Vehicle Type is Required"),
  make: Yup.string().required("Make is required"),

  year: Yup.string().required("Year is required"),
  odometer: Yup.string().required("Odometer is required"),
  transmission: Yup.string().required("Transmission is required"),
  engine: Yup.string().required("Engine is required"),
  price: Yup.string().required("Required"),
});

const VehicleRegister = () => {
  const formik = useFormik({
    initialValues: {
      vehicleType: "",
      make: "",
      model: "",
      year: "",
      Odometer: "",
      Engine: "",
      price: "",
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
          id="make"
          name="make"
          label="Make"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          id="year"
          name="year"
          label="Year"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          fullWidth
          id="odometer"
          name="odometer"
          label="Odometer"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          id="details"
          name="details"
          label="Details"
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
