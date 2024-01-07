"use client"
import Image from "next/image";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, ImageList, InputBase, Menu, MenuItem,Checkbox } from '@mui/material';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import {
  FormControl} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';




const BankDetails = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    // Open the dialog
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };
  const [value, setValue] = useState(0);
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  
  const router = useRouter();
  

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); // Format: dd-mm-yyyy
  });

    return ( 
        <div className=" w-[100%]">
       
         <div className="flex " >
        <div className=" mt-3 w-[25%] h-96 rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
      <div className="w-90  mt-6">
      <div className="flex pt-2 ml-5">
      <Box className="sup-search-bar" sx={{display:'flex', width:'120px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
          <img src="/Customers/search.svg" alt="party filter" width={20} height={20}  />
    <InputBase  fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
          </Box>
       <div className="w-[50%] h-7 flex">
       <Button className="w-[90%] h-7 rounded-lg bg-blue-500 "
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleButtonClick}
      >
    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>Add Bank</Typography>

      </Button>
    </div>
    </div>
      </div>
      <div className=" w-100 ">
      <div className="w-90 h-auto pt-2 gap-16 flex">
            <Typography variant="h6" sx={{ width:"150px", color: '#1a1a1a', fontWeight: 400, fontSize: '13px', marginLeft:'10px' }}>
           ACCOUNT NAME
          </Typography>
          <Typography variant="h6" sx={{ width:"100px", color: '#1a1a1a', fontWeight: 400, fontSize: '13px', marginLeft:'10px' }}>
           AMOUNT
          </Typography>
         
        
</div>

    <div className=" pl-4  flex bg-blue-200 pt-3">
      <div className=" flex">
    <Typography sx={{ width:'200px', fontSize: '14px', fontWeight: '400' }}>Test</Typography>
    <Typography sx={{ width:'60px', fontSize: '14px', fontWeight: '400' }}>Rs 0.00</Typography>
    </div>
    <ImageList className="mt-1 "> 
    <Image src="/Customers/dots.svg" alt="dots" width={15} height={15}/>
    </ImageList>
       
    </div>
    </div>
    </div>
    <div className=" w-[60%]">
    <div className=" mt-3 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>Bank Name:</Typography>
    <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>Account Number:</Typography>
    <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>IFSC Code:</Typography>
    <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>UPI ID:</Typography>
    <Button variant="contained" sx={{fontSize:'15px', fontWeight:'400',textTransform: 'capitalize', marginLeft:'468px', marginTop:'-185px'}}onClick={handleClick} className="relative" endIcon={<ArrowDropDownIcon />}>
              Deposit / Withdraw
              </Button>
              <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >Bank to Cash Transfer</MenuItem>
        <MenuItem >Cash to Bank Transfer</MenuItem>
        <MenuItem >Bank to Bank Transfer</MenuItem>
        <MenuItem >Adjust Bank Balance</MenuItem>
      </Menu>
    </div>
    <div className="  mt-5 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    
    </div>
    </div>
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
}

export default BankDetails;