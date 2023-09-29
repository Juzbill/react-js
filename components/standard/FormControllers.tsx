import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import {
  TextFieldVariants,
  TextField,
  Autocomplete,
  Chip,
  Checkbox,
  TextFieldProps,
  InputAdornment,
  Typography,
  Box,
  SxProps,
  Theme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export interface FormTextFieldControllerProps {
  size?: "small" | "medium";
  fieldName: string;
  label?: string;
  type: string;
  variant: TextFieldVariants;
  control: any;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  rules?: object;
  inputMode?:
    | "text"
    | "email"
    | "search"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  max?: number;
  sx?: object;
  remaining?: string | undefined;
  inputProps?: TextFieldProps["inputProps"];
  capitalize?: boolean;
  lowerCase?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  errorMessage?: string;
  id?: string;
}

export function FormTextFieldController({
  control,
  fieldName,
  type,
  label,
  variant,
  endAdornment,
  startAdornment,
  rules,
  inputMode,
  fullWidth = true,
  disabled = false,
  remaining,
  inputProps,
  capitalize,
  required,
  errorMessage,
  sx,
  autoFocus,
  id,
  size,
}: FormTextFieldControllerProps) {
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <TextField
          size={size}
          id={id}
          required={required}
          autoFocus={autoFocus}
          fullWidth={fullWidth}
          sx={{
            ...sx,
          }}
          placeholder={remaining}
          disabled={disabled}
          error={errorMessage ? !!errorMessage : !!error}
          onChange={onChange}
          value={capitalize ? value.toUpperCase() : value}
          helperText={errorMessage ? errorMessage : error?.message}
          label={label}
          type={type}
          variant={variant}
          InputProps={{
            endAdornment: endAdornment && (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              textTransform: capitalize ? "uppercase" : "none",
            },
            inputMode: inputMode,
            ...inputProps,
          }}
        />
      )}
      rules={rules}
    />
  );
}
export function FormControlText({
  control,
  fieldName,
  type,
  label,
  variant = "standard",
  endAdornment,
  startAdornment,
  rules,
  inputMode,
  fullWidth = true,
  disabled = false,
  remaining,
  inputProps,
  capitalize,
  required,
  errorMessage,
  sx,
  autoFocus,
  id,
  size,
}: FormTextFieldControllerProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-black">{label}</label>
      <FormTextFieldController
        size={size}
        control={control}
        fieldName={fieldName}
        type={type}
        variant={variant}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        rules={rules}
        inputMode={inputMode}
        fullWidth={fullWidth}
        disabled={disabled}
        remaining={remaining}
        inputProps={{
          ...inputProps,
        }}
        capitalize={capitalize}
        required={required}
        errorMessage={errorMessage}
        sx={{
          WebkitTextFillColor: "black",
          fontSize: "12px",
          lineHeight: "18px",
          ".MuiInputBase-sizeSmall": {
            WebkitTextFillColor: "black",
            borderRadius: "0.5rem",
          },
          "MuiInputBase-inputSizeSmall": {
            WebkitTextFillColor: "black",
          },
          ".MuiInputBase-input-MuiOutlinedInput-input": {
            WebkitTextFillColor: "black",
            borderRadius: "0.5rem",
          },
          ".Mui-disabled": {
            borderRadius: "0.5rem",
          },
          ".Mui-error": {
            WebkitTextFillColor: "red",
            borderRadius: "0.5rem",
          },
          ...sx,
        }}
        autoFocus={autoFocus}
        id={id}
      />
    </div>
  );
}

export interface FormDropDownControllerProps {
  control: any;
  fieldName: string;
  rules?: {};
  label?: string;
  options: string[];
  sx?: object;
  disabled?: boolean;
  size?: "small" | "medium";
}

export function FormDropDownController({
  fieldName,
  control,
  rules,
  label,
  options,
  sx,
  disabled,
  size = "medium",
}: FormDropDownControllerProps) {
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          sx={{
            ...sx,
          }}
          size={size}
          disablePortal
          fullWidth
          disabled={disabled}
          isOptionEqualToValue={(option, value) => option === value}
          options={options}
          value={value === "" ? null : value}
          onChange={(_, data) => onChange(data)}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} />
            ));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error && error.message}
              variant="outlined"
              sx={{
                ...sx,
              }}
            />
          )}
        />
      )}
    />
  );
}
export function FormControlDropDown({
  fieldName,
  control,
  rules,
  label,
  options,
  sx,
  disabled,
  size,
}: FormDropDownControllerProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-black">{label}</label>
      <FormDropDownController
        size={size}
        control={control}
        fieldName={fieldName}
        rules={rules}
        disabled={disabled}
        sx={{
          WebkitTextFillColor: "black",
          fontSize: "12px",
          lineHeight: "18px",
          ".MuiInputBase-sizeSmall": {
            WebkitTextFillColor: "black",
            borderRadius: "0.5rem",
          },
          "MuiInputBase-inputSizeSmall": {
            WebkitTextFillColor: "black",
          },
          ".MuiInputBase-input-MuiOutlinedInput-input": {
            WebkitTextFillColor: "black",
            borderRadius: "0.5rem",
          },
          ".Mui-disabled": {
            borderRadius: "0.5rem",
          },
          ".Mui-error": {
            WebkitTextFillColor: "red",
            borderRadius: "0.5rem",
          },
          ...sx,
        }}
        options={options}
      />
    </div>
  );
}
export interface formCheckBoxcontrollerProps {
  control: any;
  fieldName: string;
  label?: string;
  disabled?: boolean;
  sx?: SxProps<Theme> | undefined;
}

export function FormCheckBoxcontroller({
  control,
  fieldName,
  label,
  disabled,
  sx,
}: formCheckBoxcontrollerProps) {
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="flex flex-row items-center justify-between">
          <span>{label}</span>
          <Checkbox
            checked={value}
            onChange={onChange}
            disabled={disabled}
            sx={{ ...sx }}
          />
        </div>
      )}
    />
  );
}
export function FormControlCheckBox({
  control,
  fieldName,
  label,
  disabled,
  sx,
}: formCheckBoxcontrollerProps) {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <label className="text-xs text-black">{label}</label>
      <FormCheckBoxcontroller
        control={control}
        fieldName={fieldName}
        disabled={disabled}
        sx={{ ...sx }}
      />
    </div>
  );
}
