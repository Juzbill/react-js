import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material";
import "./InvoiceNumber.css";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const InvoiceNumber: React.FC = () => {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
  ];
  const [selectedState, setSelectedState] = React.useState("");

  const handleStateChange = (event: Box.SelectChangeEvent<string>) => {
    setSelectedState(event.target.value);
  };
  return (
    <div className="sale-inv-no-topwrapper">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DesktopDatePicker"]}>
          <DemoItem label="Select Date">
            <DesktopDatePicker defaultValue={dayjs(Date.now())} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Invoice Number: ABC123</span>

          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              label="State"
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default InvoiceNumber;
