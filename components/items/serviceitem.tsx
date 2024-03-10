"use client"
import Image from "next/image";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, Paper, Grid, ImageList, InputBase } from '@mui/material';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tabs, Tab } from '@mui/material';
import {
  FormControl,  
  InputAdornment,
  InputLabel, Select, MenuItem} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';





const ServiceItem = () => {

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
  const [isVisible, setIsVisible] = useState(true);
  const handleclick=()=>{
    alert('Successfully saved')

  }
  const router = useRouter();
  const handleClose = () => {
    setIsVisible(false);
    router.push("/app/items")
  };
 

    return ( 
        <div className=" w-[100%]">
       
         <div className="flex " >
        <div className=" mt-3 w-[25%] h-80 rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
      <div className="w-90  mt-6">
      <div className="flex pt-4 ml-5">
      <Box className="sup-search-bar" sx={{display:'flex', width:'120px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
          <img src="/Customers/search.svg" alt="party filter" width={26} height={26}  />
    <InputBase  fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
          </Box>
       <div className="w-[55%] h-7 flex">
      <Button  className="w-[85%] h-7 rounded-md bg-blue-500 items-center" onClick={handleButtonClick}>
        <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>+ Add Service</Typography>
      </Button>
      <ImageList className="mt-2 ml-2"> {/* Adjust margin-top and margin-left here */}
      <Image src="/Customers/dots.svg" alt="dots" width={15} height={15}/>
          </ImageList>
    </div>
    </div>
      </div>
      <div className=" w-100 ">
      <div className="w-90 h-auto pt-2 gap-16 flex">
            <Typography variant="h6" sx={{ width:"150px", color: '#1a1a1a', fontWeight: 400, fontSize: '16px', marginLeft:'10px' }}>
            ITEM
          </Typography>
          <ImageList className="mt-1 ">
            <img src="/Customers/partfilter.svg" alt="party filter" width={16} height={16} />
          </ImageList>
        
</div>

    <div className=" gap-12 flex bg-blue-200 pt-2">
    <Typography sx={{ width:'200px', fontSize: '15px', fontWeight: '400' }}>Service</Typography>
    <ImageList className="mt-1 "> 
    <Image src="/Customers/dots.svg" alt="dots" width={15} height={15}/>
    </ImageList>
       
    </div>
    </div>
    </div>
    <div className=" w-[60%]">
    <div className=" mt-3 ml-5 w-[100%] h-20 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    <Typography sx={{ fontSize: '16px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>Service</Typography>
    <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>Sale Price</Typography>

    </div>
    <div className="  mt-5 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    
    </div>
    </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} sx={{  width: '80%' }}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          {/* Content of the popup */}
          
    <Box className='add-topwrapper' sx={{width:'980px',background: '#FFF', height:'610px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>Add Item</Typography>

        <Box className="add-close" sx={{marginLeft:'755px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} onClick={handleClose} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Servicename*" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Item SAC" variant="outlined" sx={{ width: '270px',padding:'4px' }} InputProps={{style:{height:"40px"}}}/>
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
        label="Service Code"
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
      

      {/* Right section */}
      <Box sx={{ width:'800px',height:'120px', border:'1px solid gray', borderRadius:'10px', marginTop:'10px'}}>
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
}
        <Box className="btn-save" sx={{width: '250px',borderRadius:'4px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'650px', marginTop:'15px'}}>
        <Button variant="outlined" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'8px'}}>
              Save & New
              </Button>
              <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'8px'}}>
              Save 
              </Button>
            </Box>


    </Box>


        </DialogContent>
        
      </Dialog>


      </div>
     );
}

export default ServiceItem;