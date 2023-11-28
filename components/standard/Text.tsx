import { Typography } from "@mui/material";
import * as React from "react";

export interface ITextBodyProps {
  text: string;
  fontSize?: string;
  color?: string;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  center?: boolean;
}
function TextBody({
  text,
  fontSize = "1rem",
  color = "initial",
  className = "",
  style,
  center = false,
}: ITextBodyProps) {
  return (
    <Typography
      style={{ ...style }}
      variant="body1"
      color={color}
      fontSize={fontSize}
      className={`font-poppins ${
        center ? "flex justify-center items-center" : ""
      } ${className}`}
    >
      {text}
    </Typography>
  );
}
export default TextBody;
