"use client"
import { Box, 
  FormControl, 
  Typography, 
  TextField, 
  Button, 
  FormGroup,
  Checkbox,
Radio, 
RadioGroup,
FormControlLabel} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import "./addparties.css";
// import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import { useRouter } from "next/navigation";






const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Addparties: React.FC = () => {

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
    router.push("/app/parties/customers")
  };
  const [gstin, setGstin] = useState('');
  const [isValidGST, setIsValidGST] = useState(true);

  const validateGSTNumber = (gst:string) => {
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[Z]{1}[0-9 A-Z]{1}$/;
    return regex.test(gst);
  };

  const handleGSTChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setGstin(inputValue);
    setIsValidGST(validateGSTNumber(inputValue));
  };

  const [partyname, setPartyname] = useState('');
  const [isValidPartyname, setIsValidPartyname] = useState(true);
  

  const validatePartyname = (name: string) => {
    // Add your validation logic for partyname here
    return name.trim() !== '' && name.length <= 25; // Partyname must not be empty and should be at most 25 characters
  };

  const handlePartynameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPartyname(input);
    setIsValidPartyname(validatePartyname(input));
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const validatePhoneNumber = (number:string) => {
    return /^\d+$/.test(number) && number.length <= 15;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPhoneNumber(input);
    setIsValidPhoneNumber(validatePhoneNumber(input));
  };
  const handlePhoneNumberBlur = () => {
    setIsValidPhoneNumber(validatePhoneNumber(phoneNumber));
  };
  // date
  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); // Format: dd-mm-yyyy
  });

  // paychange
  // const [paymentType, setPaymentType] = useState(''); 

  // const handlePaymentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPaymentType(event.target.value);
  // };

  const handleIconClick = () => {
  
    router.push("/app/settings/settingsnav")
  };

  return (
    isVisible && (
    <Box className='add-topwrapper' sx={{width:'980px',background: '#FFF', height:'610px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>Add Party</Typography>
        <Box className="add-setting" sx={{marginLeft:'725px'}} >
        <SettingsIcon sx={{ fontSize: 25, color: '#666' }}onClick={handleIconClick} />
        </Box>
        <Box className="add-close" sx={{marginLeft:'25px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} onClick={handleClose} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Partyname*" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} 
        value={partyname}
          onChange={handlePartynameChange}
          error={!isValidPartyname}
          helperText={
            !isValidPartyname
              ? 'Partyname cannot be empty and must be at most 25 characters'
              : ''
          } />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="GSTIN" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} value={gstin}
        onChange={handleGSTChange}
        error={!isValidGST}
        helperText={!isValidGST ? 'Invalid GST Number' : ''}
        />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Phone Number" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onBlur={handlePhoneNumberBlur}
        error={!isValidPhoneNumber}
        helperText={!isValidPhoneNumber ? 'Invalid Phone Number' : ''}
 />
       </FormControl>
        </Box>
        <FormControl sx={{padding:"8px", marginLeft:'22px'}}>
        <TextField label="Party Group" variant="outlined"  sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
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
      {value === 0 && <Box className="add-gst-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666', display: 'flex'}}>
     
      {/* Left section */}
      <Box sx={{ flex: 1, paddingRight: 1 }}>
        {/* Your left section code */}
        <FormControl >
        <TextField label="GST Type" variant="outlined" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
        <TextField label="State" variant="outlined" sx={{ width: '300px', marginTop:'10px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
        <TextField label="Email ID" variant="outlined" sx={{ width: '300px',marginTop:'10px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
       </FormControl>
      </Box>

      {/* Right section */}
      <Box sx={{ flex: 2, paddingLeft: 1 }}>

        <FormControl>
          <TextField
            label="Billing Addres"
            variant="outlined"
            sx={{ width: '300px' }}
            InputProps={{ style: { height: '100px' } }}
          />
        </FormControl>
      </Box>
        </Box>
}
      {value === 1 && <Box className="add-gst-form" sx={{marginTop:"35px", display:'flex',flexDirection: 'column', marginLeft:'26px', color:'#666'}}>
      <Box>
      <FormControl sx={{padding:"8px"}}>
        <TextField label="Receivable Balance" variant="outlined" sx={{ width: '320px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="As of Date" variant="outlined" sx={{ width: '320px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
        </FormControl>
        </Box>
        </Box>}
      {value === 2 && <Box className="add-gst-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 1 Name" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 2 Name" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 3 Name" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
      <FormGroup row>
        <Checkbox />
        <TextField label="Additional Field 4 Name" sx={{ width: '300px',padding:'4px' }} InputProps={{style:{height:"40px"}}} /> 
      </FormGroup>
    </FormControl>
        </Box>}
        <Box className="btn-save" sx={{width: '250px',borderRadius:'4px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'650px', marginTop:'15px'}}>
              <Button variant="outlined" sx={{fontSize:'12px', fontWeight:'400'}} onClick={handleclick}>
              Save & New
              </Button>
              <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'8px'}}>
              Save 
              </Button>
            </Box>


    </Box>
    )
 
  )
}

export default Addparties;
