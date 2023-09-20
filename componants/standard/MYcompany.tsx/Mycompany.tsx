import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { FormTextFieldController } from "../FormControllers";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
  const [open, setOpen] = React.useState(true);
  const [isDetails, setIsDetails] = React.useState(Boolean);
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
      businessName: "",
      gstin: "",
      phoneNo: "",
      emailId: "",
    },
  });

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
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignContent: "left",
            }}
            
          >
            <div>
              <Button variant="text" style={{ textTransform: "none" }}>
                Business Deatails
              </Button>
            </div>
            <div>
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
                fieldName="gstin"
                control={control}
                label="GSTIN"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
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
