"use client"
import Image from "next/image";
import  React, { useState } from 'react';
import { Box,  Typography, Button, TextField, Paper, Grid, ImageList, InputBase } from '@mui/material';
import { useRouter } from "next/navigation";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const CategoryItem = () => {

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
       <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>+ Add Category</Typography>
     </Button>
   </div>
   </div>
     </div>
     <div className=" w-100 ">
     <div className=" p-2 flex gap-16 ">
          <Typography variant="h6" sx={{ width:'150px',color: '#1a1a1a', fontWeight: 500, fontSize: '16px' }}>
           CATEGORY
         </Typography>
         <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 500, fontSize: '16px' }}>
          ITEM
         </Typography>
         

         
</div>

   <div className="w-100 flex bg-blue-200 gap-8 pt-2">
   <Typography sx={{width:'150px', fontSize: '15px', fontWeight: '400' }}>Service</Typography>
      <Typography sx={{ fontSize: '15px', fontWeight: '400' }} className="ml-20">3</Typography>

   <ImageList className="mt-1 "> 
   <Image src="/Customers/dots.svg" alt="dots" width={15} height={15}/>
   </ImageList>
      
   </div>
   </div>
   </div>
   <div className=" w-[60%]">
   <div className=" mt-3 ml-5 w-[100%] h-20 rounded-md bg-slate-250 text-base md:text-lg bg-white">
   <Typography sx={{ fontSize: '16px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>Service</Typography>
   <Typography sx={{ fontSize: '14px', fontWeight: '400', marginLeft:'20px',paddingTop:'10px' }}>3</Typography>
   <Button variant="contained" sx={{fontSize:'12px', fontWeight:'400', marginLeft:'468px', marginTop:'-90px'}}className="relative">
              Move To This Category
              </Button>
   </div>
   <div className="  mt-5 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
   
   </div>
   </div>
     </div>

     <Dialog open={openDialog} onClose={handleCloseDialog} sx={{  width: '80%' }}>
        <DialogContent>
        <div className=" w-70 h-auto rounded-md bg-slate-250 text-base md:text-lg bg-white">

<Box className='add-midwrapper' sx={{width:'300px',color:'#666',display: 'flex',height:'40px', marginTop: '12px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
<Typography>Add Category</Typography>
<Box className="add-close" sx={{marginLeft:'130px'}} >
<CloseIcon sx={{ fontSize: 25, color: '#666' }} />
</Box>
</Box>

<Box  sx={{marginTop:"7px", marginLeft:'10px', display:'flex', color:'#666'}}>

<TextField label="Enter Category Name" variant="standard" sx={{ width: '270px',padding:'4px'}} InputProps={{style:{height:"40px"}}}  />


</Box>
<div className="mt-3">
<Button variant="contained" className="w-40 text-white bg-blue-700 font-medium rounded-full  pt-2 text-center items-center ml-12">
      Create 
      </Button>

   </div>


</div>
        </DialogContent>
        
        </Dialog>
  

     </div>
     );
}
 
export default CategoryItem;