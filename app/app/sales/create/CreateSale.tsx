import * as React from "react";
import Typography from "@mui/material/Typography";

export interface ICreateSaleProps {}

export function CreateSale(props: ICreateSaleProps) {
  return (
    <div className="flex justify-center items-center">
      <Typography variant="body1" color="red">
        TextBody
      </Typography>
    </div>
  );
}
