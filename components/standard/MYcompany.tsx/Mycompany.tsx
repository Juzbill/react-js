import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormTextFieldController } from "../FormControllers";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface IMyCompanyProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export default function MyCompany({ onSubmit, onCancel }: IMyCompanyProps) {
  const [open, setOpen] = useState(true);
  const [isDetails, setIsDetails] = useState(Boolean);
  const [companyData, setCompanyData] = useState({
    businessName: "",
    gstin: "",
    phoneNo: "",
    emailId: "",
  });
  const {
    control,
    handleSubmit,
    clearErrors,
    trigger,
    watch,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      ...companyData,
    },
  });

  const formSubmit = () => {
    const onSubmit: SubmitHandler<any> = async (formData) => {
      setCompanyData(formData);
      handleClose();
    };
    handleSubmit(onSubmit)();
  };
  const handleClose = () => {
    setOpen(false);
    onSubmit();
    onCancel();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="mycompany-dialog-title"
        open={open}
        sx={{
          ".MuiDialog-paperWidthSm ": {
            width: "60%",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="mycompany-dialog-title">
          Edit Firm
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
              </Button>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <FormTextFieldController
                size="small"
                fieldName="businessName"
                control={control}
                label="Business name"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="gstin"
                control={control}
                label="GSTIN"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="phoneNo"
                control={control}
                label="Phone no"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="emailId"
                control={control}
                label="Emain Id"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <div>
              <Button variant="text" style={{ textTransform: "none" }}>
                Business Deatails
              </Button>
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <FormTextFieldController
                size="small"
                fieldName="businessAddress"
                control={control}
                label="Business address"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="state"
                control={control}
                label="State"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="pincode"
                control={control}
                label="Pincode"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="businessType"
                control={control}
                label="Business type"
                type="text"
                variant="outlined"
              />
              <FormTextFieldController
                size="small"
                fieldName="businessCategory"
                control={control}
                label="Business category"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={formSubmit}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const TextArea = () => {
  return (
    <textarea
      id="w3review"
      name="w3review"
      rows={5}
      cols={24}
      style={{ padding: "0.5rem", fontSize: "0.8  rem" }}
    >
      At w3schools.com you will learn how to make a website. They offer free
      tutorials in all web development technologies.
    </textarea>
  );
};
