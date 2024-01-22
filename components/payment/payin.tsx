"use client";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { TextField, Typography, Button,Menu, MenuItem,Checkbox} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputBase from '@mui/material/InputBase';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import DescriptionIcon from '@mui/icons-material/Description';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';


const PayIn: React.FC = () => {
    const [asOfDate, setAsOfDate] = useState(() => {
        const currentDate = new Date();
        return currentDate.toLocaleDateString('en-GB'); 
      });
    

  return (
    <div className="bg-white w-[80%]">
      <div>
        <div className="flex mt-3">
          <Typography variant="h5" className=" ml-8">Payment-In</Typography>
          <div className="flex ml-auto mr-10">
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </div>
        </div>

        {/* PARTY SELECTOR */}

        <div className="mt-10 flex "
         
        >
          {/* Name Input */}
          <div className="ml-10">
            <TextField
              fullWidth
              id="Name"
              label="Search by Name/Phone*"
              variant="outlined"
              sx={{ width: "250px"}}
              InputProps={{ style: { height: "40px" } }}
            />
          </div>

          {/* Phone Number Input */}
          <div className=" flex ml-auto mr-20">
    <Typography className=" mr-10">Receipt No </Typography>
    <TextField  variant="standard" sx={{ width: "100px"}}/>
    </div>
    </div>
    {/* payment type */}
<div className="flex ml-10 mt-5">
            <TextField
              label="Payment Type"
              variant="outlined"
              sx={{ width: "150px"}}
              InputProps={{ style: { height: "40px" } }}
            />
            <div className="flex ml-auto mr-10">
  <Typography className="mt-3 mr-10">Date </Typography>

  <InputBase
    sx={{
      width: '150px',
      padding: '4px',
      border: 'none',
    }}
    inputProps={{ style: { height: '40px' } }}
    value={asOfDate}
    onChange={(e) => setAsOfDate(e.target.value)}
  />
</div>
          </div> 
    

          
    <div className="flex flex-col mt-3 ml-10">  
  <TextField
    variant="outlined"
    label="Add Description"
    sx={{ width: "200px"}}
              InputProps={{ style: { height: "40px" } }}
    // InputProps={{
    //   startAdornment: (
    //     <InputAdornment position="start">
    //       <DescriptionIcon className="text-gray-500" />
    //     </InputAdornment>
    //   ),style: { height: "40px" }
    // }}
  />
</div>
<div className=" flex ml-12 mt-5">
      <CameraIcon />
      {/* <Typography >Add Item Image</Typography> */}
    </div>
      <div className="flex justify-end mr-10 mt-10" style={{ alignItems: 'center' }}>
  <Typography  >Received</Typography>
  <TextField
    variant="outlined"
    sx={{ width: '180px', padding: '4px' }}
    className="ml-2" 
    InputProps={{ style: { height: "40px" } }}
  />
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

export default PayIn;
