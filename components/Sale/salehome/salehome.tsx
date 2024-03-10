"use client"
import React from 'react';
import { BarChart, Description, Print } from '@mui/icons-material';
import { 
    Typography, 
    TextField, 
    Button} from "@mui/material";
    import { Add,DragHandle } from '@mui/icons-material';


const SaleHome = () => {
    return ( 
        
    <div className=" w-[90%]">
    <div className="mt-3 pt-3 ml-5 w-[100%] h-40 rounded-md bg-slate-250  bg-white ">  
      <div className="pl-5 pt-3 flex ">
      <div className="relative inline-flex ">
  <select id="time-period" className="appearance-none bg-white border-none px-4 py-2 leading-tight focus:outline-none text-bold md:text-lg">
    <option value="this-month">This Month</option>
    <option value="last-month">Last Month</option>
    <option value="this-year">This Year</option>
    <option value="last-year">Last Year</option>
  </select>
  <div className="absolute inset-y-0 right-0 ml-2 flex items-center pointer-events-none">
    <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.4-1.4L10 9.2l4.6-4.6L16 6z"/></svg>
  </div>
 
</div>
<div className="ml-5 flex items-center border border-gray-500">
  <button className="bg-gray-300 px-4 py-2">Between</button>
  <div className="h-8 w-10 border border-gray-500"></div>
</div>


<div className="ml-5 mt-2 text-base md:text-lg">
  <select  className=" bg-white border px-2 py-1 ">
    <option value="this-month">ALL FIRMS</option>
    
  </select>

</div>
<div className="flex items-center space-x-8 ml-auto mr-10">
      <div className="flex flex-col items-center">
        <BarChart sx={{ fontSize: 24, color: 'gray' }} />
        <span className="text-xs">Graph</span>
      </div>
      <div className="flex flex-col items-center">
        <Description sx={{ fontSize: 24, color: 'gray' }} />
        <span className="text-xs">Excel</span>
      </div>
      <div className="flex flex-col items-center">
        <Print sx={{ fontSize: 24, color: 'gray' }} />
        <span className="text-xs">Print</span>
      </div>
    </div>

      </div>
      <div className="flex">
      <div className="mt-3 pb-2 pt-3 ml-8 w-[10%] rounded-md bg-slate-250  bg-teal-300 ">  
        <Typography className="flex flex-col ml-5"> Paid </Typography>
        <Typography className="ml-5"> ₹ 0.00</Typography>
      </div>
      <div className="flex items-center ml-2">
        <Add sx={{ fontSize: 24, color: 'black' }} />
      </div>
      <div className="mt-3 pb-2 pt-3 ml-4 w-[10%] rounded-md bg-slate-250  bg-blue-300 ">  
        <Typography className="flex flex-col ml-5">UnPaid </Typography>
        <Typography className="ml-5"> ₹ 0.00</Typography>
      </div>
      <div className="flex items-center ml-2">
        <DragHandle sx={{ fontSize: 24, color: 'black' }} />
      </div>
            <div className="mt-3 pb-2 pt-3 ml-4 w-[10%] rounded-md bg-slate-250  bg-orange-300 ">  
        <Typography className="flex flex-col ml-5">UnPaid </Typography>
        <Typography className="ml-5"> ₹ 0.00</Typography>
      </div>
      </div>
    </div>
    <div className="mt-3 pt-3 ml-5 w-[100%] h-60 rounded-md bg-slate-250 text-base md:text-lg bg-white">  
      <div className="pl-5 pt-3  ">
      
      </div>
    
   
    </div>
 </div>
 
    
      
     );
}
 
export default SaleHome;