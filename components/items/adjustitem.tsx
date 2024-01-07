"use client"
import { Box, 
  FormControl, 
  Typography, 
  TextField, 
  Button, 
  } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Adjustitems: React.FC = () => {
  const router=useRouter()
  const [value, setValue] = useState(0);
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  const [isVisible, setIsVisible] = useState(true);
  const handleclick=()=>{
    alert('Successfully saved')

  }
  const handleClose = () => {
    setIsVisible(false);
    router.push("/app/items")
  };
 

  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); // Format: dd-mm-yyyy
  });


  return (
   
    <Box className='add-topwrapper' sx={{width:'980px',background: '#FFF', height:'260px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'930px',color:'#666',display: 'flex',height:'30px', marginTop: '12px', marginLeft: '26px',background: '#FFF'}}>
        <Typography>Add Item</Typography>
        <Box className="add-close" sx={{marginLeft:'835px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} onClick={handleClose} />
        </Box>
        </Box>
        <Box sx={{width:'940px',display: 'flex',borderBottom: '1px solid var(--line-Color, #E6E6E6)', marginLeft: '26px'}}>
        <Typography>Item Name</Typography>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Adjustment Date" variant="outlined" sx={{ width: '270px',padding:'4px',marginLeft:'570px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
        </FormControl>
        </Box>
        
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Total Qty" variant="outlined" sx={{ width: '250px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="At Price" variant="outlined" sx={{ width: '250px',padding:'4px' }} InputProps={{style:{height:"40px"}}}/>
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Details" variant="outlined" sx={{ width: '350px',padding:'4px' }} InputProps={{style:{height:"40px"}}}/>
        </FormControl>
        </Box>
    
<Box className="btn-save" sx={{marginTop:'13px', borderRadius:'4px', height: '35px', marginLeft:'880px'}}>
              <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}} onClick={handleclick}>
              Save
              </Button>

            </Box>
          </Box>
    )
}

export default Adjustitems;
