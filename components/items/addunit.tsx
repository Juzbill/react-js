"use client"
import { Box, 
  FormControl, 
  Typography, 
  TextField, 
  Button, 
 } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddUnits: React.FC = () => {
  const router=useRouter()
  const [value, setValue] = useState(0);
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  const [isVisible, setIsVisible] = useState(true);
 
  const handleClose = () => {
    setIsVisible(false);
    router.push("/app/items")
  };
 

  return (
    <div className=" w-100 h-auto rounded-md bg-slate-250 text-base md:text-lg bg-white">

        <Box className='add-midwrapper' sx={{width:'800px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>NEW UNIT</Typography>
        <Box className="add-close" sx={{marginLeft:'85%'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} onClick={handleClose} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="UNIT NAME" variant="standard" sx={{ width: '270px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="SHORT NAME" variant="standard" sx={{ width: '270px',padding:'4px', marginLeft:'80px'  }} InputProps={{style:{height:"40px"}}}/>
        </FormControl>
        
        </Box>
        <Box className="btn-save" sx={{width: '250px',borderRadius:'4px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'600px', marginTop:'15px'}}>
        <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}}>
              Save 
              </Button>
        <Button variant="outlined" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'8px'}} >
              Save & New
              </Button>
              
            </Box>


  </div>
  )
}

export default AddUnits;
