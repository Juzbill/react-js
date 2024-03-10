"use client"
import Image from "next/image";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, Paper, Grid, ImageList, InputBase,FormControl } from '@mui/material';
import { useRouter } from "next/navigation";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';



const UnitItem = () => {
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
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    // Open the dialog
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };
    return ( 
        <div className=" w-[100%]">
       
        <div className="flex " >
       <div className=" mt-3 w-[25%] h-80 rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
     <div className="w-90  mt-6">
     <div className="flex pt-4 ml-5">
     <Box className="sup-search-bar" sx={{display:'flex', width:'150px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
         <img src="/Customers/search.svg" alt="party filter" width={26} height={26}  />
   <InputBase  fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
         </Box>
      <div className="w-[55%] h-7">
     <Button  className="w-[85%] h-8 rounded-md bg-blue-500 items-center" onClick={handleButtonClick}>
       <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>+ Add Units</Typography>
     </Button>
   </div>
   </div>
     </div>
     <div className=" w-100 ">
     <div className=" p-2 flex gap-16 ">
          <Typography variant="h6" sx={{ width:'120px',color: '#1a1a1a', fontWeight: 500, fontSize: '14px' }}>
           FULLNAME
         </Typography>
         <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 500, fontSize: '14px' }}>
          SHORTNAME
         </Typography>
         

         
</div>

   <div className="w-100 flex bg-blue-200 gap-8 pt-2">
   <Typography sx={{width:'150px', fontSize: '15px', fontWeight: '400' }}>BAGS</Typography>
      <Typography sx={{ fontSize: '15px', fontWeight: '400' }} className="ml-20">Bag</Typography>

   <ImageList className="mt-1 "> 
   <Image src="/Customers/dots.svg" alt="dots" width={15} height={15}/>
   </ImageList>
      
   </div>
   </div>
   </div>
   <div className=" w-[60%]">
   <div className=" mt-3 ml-5 w-[100%] h-20 rounded-md bg-slate-250 text-base md:text-lg bg-white">
   <Typography sx={{ fontSize: '16px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>BAGS</Typography>
   <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>3</Typography>
   <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'468px', marginTop:'-90px'}}className="relative">
             Add Conversion
              </Button>
   </div>
   <div className="  mt-5 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
   
   </div>
   </div>
     </div>

     <Dialog open={openDialog} onClose={handleCloseDialog} sx={{  width: '80%' }}>
        <DialogContent>
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
        </DialogContent>
        
        </Dialog>
  

     </div>
     );
}
 
export default UnitItem;