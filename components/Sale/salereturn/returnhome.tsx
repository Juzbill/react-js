"use client"
import React from 'react';
import { BarChart, Description, Print } from '@mui/icons-material';
import { 
    Typography, 
    TextField, 
    Button} from "@mui/material";
import { Add,DragHandle } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const SaleReturnHome = () => {
    const router = useRouter();
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
  <select  className=" bg-white border px-2 py-1 w-40 ">
    <option value="this-month">ALL FIRMS</option>
    
  </select>

</div>
<div className="flex items-center space-x-8 ml-auto mr-10">
      
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
      <div className="flex ml-8 mt-3 text-base md:text-lg">
  <select  className="bg-white px-2 py-2  w-40">
    <option value="this-month">Credit Note</option>
    <option value="last-month"></option>
  </select>
</div>

    </div>
    <div className="mt-3 pt-3 ml-5 w-[100%] h-60 rounded-md bg-slate-250 text-base md:text-lg bg-white">  
    <div className="pl-5 pt-3  ">
      <Typography>Transactions</Typography>
      </div>
      <div className="flex items-center pl-10 pt-3" >
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start" sx={{width:"100px"}} >
            <SearchIcon />
          </InputAdornment>
        }
      />
      
      
       <Button className=" h-8 mt-1 ml-auto mr-20 rounded-md bg-blue-500 "
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => router.push("/app/salereturn/returnpage")}
      >
    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: 'white', }}>Add Credit Note</Typography>


      </Button>
      </div>
      </div>
    
   
    </div>

 
    
      
     );
}
 
export default SaleReturnHome;