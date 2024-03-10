"use client"
import Link from "next/link";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, FormGroup,
    Checkbox } from '@mui/material';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tabs, Tab } from '@mui/material';
import { FormControl} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const BankAdd: React.FC = () => {

  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    // Open the dialog
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };

  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); // Format: dd-mm-yyyy
  });

  return (
    <div className="w-[100%]">

    <div className="w-[65%] h-auto rounded-md bg-slate-250 text-base md:text-lg bg-white ">
    <div className="flex ml-10 pt-3">
  <Typography >Add Bank Account</Typography>
  <div className="flex items-center ml-auto mr-10">
    <CloseIcon sx={{ fontSize: 25, color: '#666' }} />
  </div>
</div>
<div className="w-[90%] flex ml-10 mt-3 ">
<FormControl sx={{padding:"4px"}}>
<TextField label="Account Display Name" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
   </FormControl>
   <FormControl sx={{padding:"4px"}}>
<TextField label="Opening Balance" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
   </FormControl>
   <FormControl sx={{padding:"4px"}}>
        <TextField label="As of Date" variant="outlined" sx={{ width: '220px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
        </FormControl>

</div>
<div className="mt-3 ml-10 border border-gray-500 p-4 rounded-md">

<FormControl>
      <FormGroup row style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <Typography >Print UPI QR Code on Invoices</Typography>
      </FormGroup>
      <FormGroup row style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <Typography>Print bank details on Invoices</Typography>
      </FormGroup>
    </FormControl>
   </div>
   <div className=" ml-10 border border-gray-500 p-4 rounded-md">

<FormControl>
      <FormGroup row style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <Typography >Link Bank Account Online</Typography>
      </FormGroup>
    </FormControl>
   </div>
   <div className="mt-10 flex justify-end mr-10 pb-4">

   <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}}>
              Save 
              </Button>
    </div>
</div>
  
    </div>
 
  );
};

export default BankAdd;
