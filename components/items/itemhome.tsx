"use client"
import Link from "next/link";
import Image from "next/image";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, Paper, Grid, ImageList, List, ListItem, ListItemText, InputBase } from '@mui/material';
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tabs, Tab } from '@mui/material';
import {
  FormControl,  
  FormGroup,
  Checkbox,
  InputAdornment,
  InputLabel, Select, MenuItem,
Radio, 
RadioGroup,
FormControlLabel} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';




const itemquantity = [
  { id: 1, item: "Nature Refined Oil", quantity: 12 },
  { id: 2, item: "Cadbury Oreo", quantity: 25 },
  { id: 3, item: "Sunfeast dark fantasy", quantity: 15 },
  { id: 4, item: "Haldiram's Bhujia", quantity: 20 },
  { id: 5, item: "Cadbury dairymilk", quantity: 25 },
  { id: 6, item: "Cwc Peanuts", quantity: 28 },
 
];
const recentquantity = [
  { id: 1, item: "Nature Refined Oil", quantity: 12}
];

const itemdetail=[
  {sale:100, purchase:80, stock:100}
]

const ItemHome: React.FC = () => {
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

  const handleNavigate = () => {
    // Navigate to the specified route
    router.push("/app/items/additems");
    // Close the dialog
    setOpenDialog(false);
  };

  return (
    <div className=" w-[100%]">
    <div className="px-5 py-2 gap-8 w-[88%] rounded-md bg-slate-250  flex text-base md:text-lg bg-white ml-4">
      <Link
        className="text-green-500 hover:underline mr-4"
        href={"/"}
      >
        Products
      </Link>
      <Link className="mr-4"  href={"/app/items/serviceitem"}> Services </Link>
      <Link className="mr-4"  href={"/app/items/category"}> Category </Link>
      <Link className="mr-4"  href={"/app/items/unit"}> Units </Link>

    </div>
     <div className="flex flex-row">
    <div className="px-5 mt-3 w-[25%] rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
  <div className="w-90 h-auto mt-6">
  <div className="flex pt-8">
  <Box className="sup-search-bar" sx={{display:'flex', width:'148px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
      <img src="/Customers/search.svg" alt="party filter" width={16} height={16} />
<InputBase placeholder='Search' fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
      </Box>
   <div className="w-[38%] h-7 rounded-md bg-blue-500 items-center ">
  <Button onClick={handleButtonClick}>
    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', marginLeft:'3px' }}>+ Add Item</Typography>
  </Button>
</div>
</div>
  </div>
  <div className=" w-90 h-auto pt-5">
  <Box className="sup-detail-bal-wrapper" sx={{ width: '100%', height: 'auto',  marginTop: '8px' }}>
      <Paper elevation={0} className="sup-detail-filter-wrapper" sx={{ background: '#f6f6f6', border: '1px solid #e6e6e6' }}>
        <Grid container alignItems="center">
          <Grid item xs={6} className="sup-detail-left" sx={{width:'280px', display:'flex', padding: '10px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'16px' }}>
              Items
            </Typography>
            <ImageList sx={{marginLeft:'50px', marginTop:'3px'}}>
            <img src="/Customers/partfilter.svg" alt="party filter" width={16} height={16} />
            </ImageList>
          </Grid>
          <Grid item xs={6} className="sup-detail-right" sx={{width:'118px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'16px', marginLeft:'10px' }}>
              Quantity
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    <div className=" w-90 h-auto">
      <List component="ul">
        {itemquantity.map((customer, index) => (
          <ListItem key={index} className="sup-balance">
            <ListItemText>
              <Typography variant="h6" className="sup-balance-name" sx={{ width:'150px', color: '#666', fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 4px' }}>
                {customer.item}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6" className="sup-balance-amount" sx={{ padding:'8px',color: '#D01717', fontSize: '16px', fontWeight: 500 }}>
                {customer.quantity}
              </Typography>
            </ListItemText>
            <ListItemText sx={{display: 'flex', width: '18px', height: '18px', justifyContent: 'center',alignItems: 'center', marginLeft:'30px'}}>
              <Image src="/Customers/dots.svg" alt="dots" width={15} height={15} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
   
</div>
</div>

</div>
<div className=" flex flex-row mt-3 ml-10 w-[60%] h-auto rounded-md bg-slate-250 text-base md:text-lg bg-white">
<div className="w-[88%] h-[27%] rounded-md mt-5 ml-10 rounded-md border  border-solid border-yellow-300 border-opacity-50 bg-yellow-200 bg-opacity-30">
    <Box className="sup-profile" sx={{width: '648px',height: '47px',marginTop:'20px', background: 'rgba(255, 237, 213, 0.60)',border: '0.5px solid rgba(248, 200, 136, 0.50)', display:'flex'}}>
    <List>
    {recentquantity.map((recent,index)=>(
      <ListItem key={index}>
      
    <Typography className="sup-name" sx={{color:'#1A1A1A',fontSize: '16px',fontWeight: '500', width:'263px', height:'19px', marginLeft:'20px'}}>
      {recent.item}
    </Typography>
   
    <Typography className="sup-creditLimit" variant="body2" sx={{display:'flex', alignItems:'center', marginLeft:'100px'}}>
      Quantity: {recent.quantity}
    </Typography>
  
    </ListItem>
    ))}
    </List>
  </Box>
  <Box className="stock-wrapper" sx={{marginLeft:'20px'}}>
  <List>
      {itemdetail.map((detail,index)=>(
        <Box key={index}>
    <Box  sx={{display:'flex', alignItems:'center', marginTop:'7px'}}>
      <Typography  variant="body2" >
        Sales Price: $
      </Typography>
      <Typography variant="body2" >
        {detail.sale}
      </Typography>
      
    </Box>
    <Box  sx={{display:'flex', alignItems:'center'}}>
      <Typography  variant="body2">
        Purchase Price: $
      </Typography>
      <Typography variant="body2">
        {detail.purchase}
      </Typography>
    </Box>
    <Box  sx={{display:'flex', alignItems:'center'}}>
      <Typography className="sup-gstkey" variant="body2">
        Stock Value: $
      </Typography>
      <Typography  variant="body2">
        {detail.stock}
      </Typography> 
      </Box>
      </Box>
      ))}
      </List>
    </Box>
    <Button onClick={() => router.push("/app/items/adjustitems")}variant="contained" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'468px', position:'relative', marginTop:'-90px'}}>
              Adjust Item
              </Button>
    
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
};

export default ItemHome;
