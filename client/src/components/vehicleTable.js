import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const VehicleTable = ({ vehicles }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="vehicle table">
        <TableHead>
          <TableRow>
            <TableCell>Make</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Mileage</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell component="th" scope="row">
                {vehicle.make}
              </TableCell>
              <TableCell align="right">{vehicle.model}</TableCell>
              <TableCell align="right">{vehicle.year}</TableCell>
              <TableCell align="right">{vehicle.mileage}</TableCell>
              <TableCell align="right">{vehicle.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;
