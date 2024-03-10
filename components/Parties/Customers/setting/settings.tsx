"use client"
import { Grid, Paper, Typography , Box, FormControl, FormGroup, Checkbox, TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { usePartyContext } from "../setting/PartyContext";



const Settings: React.FC = () => {
  const router=useRouter()
  const [isVisible, setIsVisible] = useState(true);
  
  const { togglePartyGroup } = usePartyContext();

  return (
    <Paper sx={{width:'980px',height:'610px', marginTop:'20px'}}>
         <Grid container spacing={3}>
      {/* Left Section */}
      <Grid item xs={5} sx={{ marginTop:'10px'}}>
          <Typography variant="h6" sx={{marginLeft:'30px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',paddingBottom: '10px', paddingLeft: '10px'}}>Party Settings</Typography>
          <Box className="setting-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl>
      <FormGroup row>
        <Checkbox onChange={togglePartyGroup} />
        <Typography sx={{marginTop:'8px'}} > Party Grouping</Typography>
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <Typography sx={{marginTop:'8px'}} > Shipping Address</Typography>
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <Typography sx={{marginTop:'8px'}} > Enable Payment Remainder</Typography>
      </FormGroup>
     
    </FormControl>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={5} sx={{marginTop:'10px'}}>
          <Typography variant="h6" sx={{borderBottom: '1px solid var(--line-Color, #E6E6E6)',paddingBottom: '10px', paddingLeft: '10px'}}>Addtional Fields</Typography>        
          
      <Box className="settings-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 1" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 2" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 3" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 4" sx={{ width: '180px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      
      </FormGroup>
    </FormControl>
        </Box>
      </Grid>
      
    </Grid>
    </Paper>
  
  
 
  )
}

export default Settings;
