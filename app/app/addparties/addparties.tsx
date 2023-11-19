"use client"
import { Box, FormControl, Typography, TextField, Stack } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import "./addparties.css";
// import Divider from '@mui/material/Divider';

import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Addparties: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  return (
    <Box className='add-topwrapper' sx={{width:'1008px',background: '#FFF', height:'550px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>Add Party</Typography>
        <Box className="add-setting" sx={{marginLeft:'725px'}} >
        <SettingsIcon sx={{ fontSize: 25, color: '#666' }} />
        </Box>
        <Box className="add-close" sx={{marginLeft:'25px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Partyname*" variant="outlined" sx={{ width: '270px' }}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="GSTIN" variant="outlined" sx={{ width: '270px' }}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Phone Number" variant="outlined" sx={{ width: '270px' }}  />
       </FormControl>
        </Box>
        <FormControl sx={{padding:"8px", marginLeft:'22px'}}>
        <TextField label="Party Group" variant="outlined" sx={{ width: '270px' }}  />
       </FormControl>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary" 
        className='add-lastwrapper' 
        sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '22px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}
      >
        <Tab label="GST & Address" />
        <Tab label="Credit & Balance" />
        <Tab label="Additional fields" />
      </Tabs>
      {/* Content for each tab */}
      {value === 0 && <Box className="add-gst-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl >
        <TextField label="GST Type" variant="outlined" sx={{ width: '300px' }}  />
        <TextField label="State" variant="outlined" sx={{ width: '300px', marginTop:'10px' }}  />
        <TextField label="Email ID" variant="outlined" sx={{ width: '300px',marginTop:'10px' }}  />
       </FormControl>
        </Box>
}
      {value === 1 && <Box className="add-gst-form" sx={{marginTop:"35px", display:'flex', marginLeft:'26px', color:'#666'}}>
      <FormControl sx={{padding:"8px"}}>
        <TextField label="Opening Balance" variant="outlined" sx={{ width: '320px' }}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="As of Date" variant="outlined" sx={{ width: '320px' }}  />
        </FormControl>
        </Box>}
      {value === 2 && <Box className="add-gst-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl >
        <TextField label="Additional Field 1 Name" variant="outlined" sx={{ width: '300px' }}  />
        </FormControl>
        <FormControl >
        <TextField label="Additional Field 2 Name" variant="outlined" sx={{ width: '300px', marginTop:'10px' }}  />
        </FormControl>
        <FormControl >
        <TextField label="Additional Field 3 Name" variant="outlined" sx={{ width: '300px',marginTop:'10px' }}  />
        </FormControl>
        <FormControl >
        <TextField label="Additional Field 4 Name" variant="outlined" sx={{ width: '300px',marginTop:'10px' }}  />
       </FormControl>
        </Box>}
  


    </Box>
 
 
  )
}

export default Addparties;
