"use client"
import React from 'react';
import Link from "next/link";
import {  Typography, Button, TextField, ImageList, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const ExpenseCategory = () => {
  return (
    <div className="w-full">
      {/* Navigation Links */}
      <div className="rounded-md bg-slate-250 flex text-base md:text-lg bg-white ml-4 md:w-[86%]">
        <Link className="w-[45%] text-green-500 hover:underline ml-2 md:ml-24" href={"/"}>
          Category
        </Link>
        <Link className="ml-2 md:ml-16 w-[35%]" href={"/"}>
          Item
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">

        {/* Left Section */}
        <div className="mt-3 md:w-[25%] h-auto md:h-96 rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
        <div className="w-[100%]  mt-6">
      <div className="flex pt-2 ml-5">
      <div className="w-[40%] flex  items-center" >
          <img src="/Customers/search.svg" alt="party filter" width={20} height={20}  />
    <InputBase  fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'4px',fontWeight:'400'}}/>
          </div>
       <div className="w-[55%] h-7 flex ">
       <Button className="w-[100%] h-7 rounded-full bg-blue-500 "
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        // onClick={handleButtonClick}
      >
    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>Add Expense</Typography>


      </Button>
    </div>
    </div>
      </div>
      <div className=" w-100 ">
      <div className="w-90 h-auto pt-2 gap-24 flex ml-5">
            <Typography variant="h6" sx={{color: '#1a1a1a', fontWeight: 400, fontSize: '13px' }}>
           CATEGORY
          </Typography>
          <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize: '13px'}}>
           AMOUNT
          </Typography>
         
        
</div>

    <div className="w-100  flex bg-blue-200 pt-3">
      <div className=" w-90 h-auto gap-36 flex ml-5">
    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Petrol</Typography>
    <Typography sx={{  fontSize: '14px', fontWeight: '400' }}>0</Typography>
    </div>
    
       
    </div>
    </div>

        </div>

        {/* Right Section */}
        <div className="mt-3 md:w-[60%] ">
        <div className="mt-3 pt-5 pl-5 ml-5 w-[100%] h-30 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    <div className="flex">
    <Typography sx={{ fontSize: '15px', fontWeight: '400' }}>PETROL</Typography>
    <Typography className="ml-auto mr-5" sx={{ fontSize: '14px', fontWeight: '400' }}>Total: Rs 0.00</Typography>
    </div>
    <div className="flex mt-3">
    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Direct Expense</Typography>
    <Typography className="ml-auto mr-5" sx={{ fontSize: '14px', fontWeight: '400' }}>Balance: Rs 0.00</Typography>
    </div>    

</div>

    <div className="  mt-5 ml-5 w-[100%] h-40 rounded-md bg-slate-250 text-base md:text-lg bg-white">
    
    </div>
      </div>
    </div>
    </div>
  );
}

export default ExpenseCategory;
