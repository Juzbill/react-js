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


const TransferDetail: React.FC = () => {

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

    <div className="w-[55%] h-auto rounded-md bg-slate-250 text-base md:text-lg bg-white ">
    <div className="flex ml-10 pt-3">
  <Typography >Bank to Cash Transfer</Typography>
  <div className="flex items-center ml-auto mr-10">
    <CloseIcon sx={{ fontSize: 25, color: '#666' }} />
  </div>
</div>
<div className="w-[90%] flex ml-10 mt-3 ">
<FormControl sx={{padding:"4px"}}>
<TextField label="From" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
   </FormControl>
   <FormControl sx={{padding:"4px"}}>
<TextField label="To" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
   </FormControl>
   </div>
   <div className="w-[90%] flex ml-10 mt-3 ">

   <FormControl sx={{padding:"4px"}}>
<TextField label="Amount" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
   </FormControl>
   <FormControl sx={{padding:"4px"}}>
        <TextField label="Adjustment Date" variant="outlined" sx={{ width: '220px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
        </FormControl>
</div>
<div className="w-[90%] flex ml-10 mt-3 ">

<FormControl sx={{padding:"4px"}}>
<TextField label="Add Description" variant="outlined"  sx={{ width: '220px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
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

export default TransferDetail;
