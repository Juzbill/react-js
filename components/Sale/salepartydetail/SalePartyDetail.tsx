"use client";
import { useState } from "react";
import {
  Typography,
  Box,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import InvoiceNumber from "../InvoiceNumber/InvoiceNumber";

const SalePartyDetail: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const handleToggle = () => {
    setPaymentMethod((prevMethod: any) =>
      prevMethod === "Cash" ? "Credit" : "Cash"
    );
  };

  return (
    <Box>
      <Box>
        <Box p={2} display="flex" alignItems="center" marginTop={0} height={20}>
          <Typography variant="h4">Sale</Typography>
          <Divider sx={{ marginY: 4, backgroundColor: "primary.main" }} />
          <Box sx={{ margin: "25px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1">Payment Method</Typography>
              <FormControlLabel
                control={
                  <Switch
                    sx={{ transform: "scale(1.3)", margin: "10px" }}
                    checked={paymentMethod === "Credit"}
                    onChange={handleToggle}
                  />
                }
                label={paymentMethod}
              />
            </Box>
          </Box>
        </Box>

        {/* PARTY SELECTOR */}

        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          {/* Billing Name Input */}
          <Box>
            <TextField
              fullWidth
              id="billingName"
              label="Billing Name (Optional)"
              variant="outlined"
              sx={{ width: "300px" }}
              InputProps={{ style: { height: "50px" } }}
            />
          </Box>

          {/* Phone Number Input */}
          <Box>
            <TextField
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              sx={{ width: "300px" }}
              InputProps={{ style: { height: "50px" } }}
            />
          </Box>
        </Box>
        {/* Address Input */}
        <Box sx={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            id="address"
            label="Address"
            variant="outlined"
            multiline
            sx={{ width: "300px" }}
            InputProps={{ style: { height: "150px" } }}
            rows={4}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SalePartyDetail;
