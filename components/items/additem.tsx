"use client"
import { Box, 
  FormControl, 
  Typography, 
  TextField, 
  Button, 
  FormGroup,
  Checkbox,
  InputAdornment,
  InputLabel, Select, MenuItem,
Radio, 
RadioGroup,
FormControlLabel} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import { useRouter } from "next/navigation";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Additems: React.FC = () => {
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
 


  // date
  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); // Format: dd-mm-yyyy
  });

 

  const handleIconClick = () => {
  
    router.push("/app/settings/settingsnav")
  };

  return (
    isVisible && (
    <Box className='add-topwrapper' sx={{width:'980px',background: '#FFF', height:'610px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>Add Item</Typography>
        <Box className="add-setting" sx={{marginLeft:'725px'}} >
        <SettingsIcon sx={{ fontSize: 25, color: '#666' }}onClick={handleIconClick} />
        </Box>
        <Box className="add-close" sx={{marginLeft:'25px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} onClick={handleClose} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Itemname*" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Item HSN" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}/>
        </FormControl>
        <Box className="btn-save" sx={{marginTop:'13px', borderRadius:'4px', height: '35px',background:'#ADD8E6'}}>
              <Button variant="outlined" sx={{fontSize:'12px', fontWeight:'400'}} onClick={handleclick}>
              Select Unit
              </Button>

            </Box>
        </Box>
    <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>

        <FormControl sx={{padding:"8px"}}>
        <TextField label="Category" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
       </FormControl>
        <FormControl sx={{ padding: '8px' }}>
      <TextField
        label="Item Code"
        variant="outlined"
        sx={{ width: '270px', padding: '4px' }}
        InputProps={{
          style: { height: '40px' },
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{color:"#1E90FF",borderRadius:"50px", height: '25px',fontSize:'12px', fontWeight:'400',background:'#ADD8E6'}}
              >
                Assign Code
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
    <Box sx={{ padding: '2px',  color: '#1E90FF', marginTop: '17px', display:'flex' }}>
      <CameraIcon />
      <Typography >Add Item Image</Typography>
    </Box>
</Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary" 
        className='add-lastwrapper' 
        sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '22px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}
      >
        <Tab label="Pricing" />
        <Tab label="Stock" />
      </Tabs>
      {/* Content for each tab */}
      {value === 0 && <Box className="item-form" sx={{ marginTop:"35px", width:'800px', marginLeft:'26px', color:'#666'}}>
     
      {/* Left section */}
      <Box sx={{ width:'800px',height:'120px', border:'1px solid gray', borderRadius:'10px'}}>
        <Box sx={{marginLeft:'20px', marginTop:'15px'}}>
        <Typography >Sale Price</Typography>
        <Box display="flex" alignItems="center" sx={{marginLeft:'10px', marginTop:'10px'}}>
      {/* First TextField */}
      <TextField
        label="Sale Price"
        variant="outlined"
        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 0, width: '20%'  }}
        InputProps={{ style: { height: '40px', borderTopRightRadius: 0, borderBottomRightRadius: 0 } }}
      />

      {/* Second TextField */}
      <TextField
        label="Without Tax"
        variant="outlined"
        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 0, width: '20%' }}
        InputProps={{ style: { height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } }}
      />
      </Box>
        </Box>
      </Box>
      <Box sx={{display:'flex', marginTop:'10px'}}>
      <Box sx={{ flex: 1, paddingRight: 2 , border:'1px solid gray',height:'100px', borderRadius:'10px'}}>
        <Box >
        <Typography sx={{marginLeft:'10px', marginTop:'10px'}}>Purchase Price</Typography>
        <Box display="flex" alignItems="center" sx={{marginLeft:'10px', marginTop:'10px'}}>
      {/* First TextField */}
      <TextField
        label="Purchase Price"
        variant="outlined"
        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 0, width:'180px'  }}
        InputProps={{ style: { height: '40px', borderTopRightRadius: 0, borderBottomRightRadius: 0 } }}
      />

      {/* Second TextField */}
      <TextField
        label="Without Tax"
        variant="outlined"
        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 0, width:'150px' }}
        InputProps={{ style: { height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } }}
      />
      </Box>
        </Box>
      </Box>

      {/* Right section */}
      <Box sx={{ flex: 2, paddingLeft: 1,border:'1px solid gray',marginLeft:'5px', borderRadius:'10px',width:'700px' }}>
      <Box >
        <Typography sx={{marginLeft:'10px', marginTop:'10px'}}>Taxes</Typography>
        </Box>
        <FormControl sx={{ padding: '8px',marginTop:'5px' }}>
      <InputLabel id="tax-rate-label">Tax Rate</InputLabel>
      <Select
        labelId="tax-rate-label"
        label="Tax Rate"
        variant="outlined"
        IconComponent={ArrowDropDownIcon}
        sx={{ width: '220px', padding: '4px', height: '40px' }}
        inputProps={{ style: { height: '40px' } }}
      >
        <MenuItem value="">
          None
        </MenuItem>
        {/* Add more menu items as needed */}
      </Select>
    </FormControl>
      </Box>
      </Box>
        </Box>
}
      {value === 1 && <Box className="add-gst-form" sx={{marginTop:"35px", display:'flex',flexDirection: 'column', marginLeft:'26px', color:'#666'}}>
      <Box>
      <FormControl sx={{padding:"8px"}}>
        <TextField label="Opening Quantity" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="At Price" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="As of Date" variant="outlined" sx={{ width: '270px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
        </FormControl>
        </Box>
        <Box sx={{display:'flex'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Min Stock To Maintain" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label=" Location" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
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

export default Additems;
