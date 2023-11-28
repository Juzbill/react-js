import { Button, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface IButtonProps {
  textButton?: boolean;
  startIcon?: ReactNode;
  size?: "small" | "medium";
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  label: ReactNode;
  sx?: SxProps<Theme> | undefined;
  style?: React.CSSProperties;
  className?: string | undefined;
  endIcon?: ReactNode;
  id?: string;
  background?: string;
  color?: string;
}

export const BlueButton = ({
  onClick,
  disabled = false,
  loading = false,
  label,
  sx,
  size = "medium",
  startIcon,
  style,
  className,
  endIcon,
  textButton = false,
  id,
  background,
  color,
}: IButtonProps) => {
  return (
    <Button
      id={id}
      variant={textButton ? "text" : "contained"}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      className={`rounded-lg min-w-max font-sans flex flex-row  ${className}`}
      style={{
        textTransform: "none",
        padding: size === "small" ? "0.5rem 2.25rem" : "0.75rem 1.5rem",
        fontSize: size === "small" ? "0.75rem" : "1rem",
        lineHeight: size === "small" ? "1.125rem" : "1.5rem",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      sx={{
        background: textButton ? "none" : background ? background : "#06F",
        color: textButton ? "black" : color ? "black" : "white",
        "&:hover": {
          background: textButton ? "none" : background ? background : "#06F",
          color: textButton ? "black" : color ? "black" : "white",
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};
