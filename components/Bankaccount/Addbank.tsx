"use client"
import Link from "next/link";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField,
  Checkbox } from '@mui/material';
  import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tabs, Tab } from '@mui/material';
import { FormControl} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { FormGroup } from '@mui/material';

const BankAccount: React.FC = () => {

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

    <div className="w-100% flex h-screen items-center justify-center ml-72">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Add Your Bank Account Here</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          style={{ backgroundColor: 'red' }}
          onClick={handleButtonClick}
        >
          Add Bank Account
        </Button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}  sx={{ width: '90%', maxWidth: 'none' }} >
        <DialogContent>
        <div className="w-[100%] ">

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

<div>
  <div  style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox />
    <Typography >Print UPI QR Code on Invoices</Typography>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox />
    <Typography>Print bank details on Invoices</Typography>
  </div>
</div>
</div>
<div className=" ml-10 border border-gray-500 p-4 rounded-md">

<div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox />
    <Typography >Link Bank Account Online</Typography>
  </div>
</div>
</div>
<div className="mt-10 flex justify-end mr-10 pb-4">

<Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}}>
          Save 
          </Button>
</div>
</div>

</div>
        </DialogContent>
        
        </Dialog>
  
    </div>
  
  );
};

export default BankAccount;
