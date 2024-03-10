"use client"
import React from 'react';
import Link from "next/link";
import {  Typography, Button, Divider, ImageList, InputBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const ExpenseItem = () => {
    return ( <div className="w-[100%]">
    <div className="flex " >
        <div className=" mt-3 w-[25%] h-96 rounded-md bg-slate-250 text-base md:text-lg bg-white ml-4">
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
      <div className="w-90 h-auto pt-2 gap-36 flex ml-5">
            <Typography variant="h6"  sx={{color: '#1a1a1a', fontWeight: 400, fontSize: '13px' }}>
           ITEM
          </Typography>
          <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize: '13px'}}>
           AMOUNT
          </Typography>
         
        
</div>

    <div className="w-100  flex bg-blue-200 pt-3">
      <div className=" w-90 h-auto gap-36 flex ml-5">
    <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Petrol</Typography>
    <Typography sx={{  fontSize: '14px', fontWeight: '400', marginLeft:'10px' }}>0</Typography>
    </div>
    
       
    </div>
    </div>
    </div>
    <div className=" w-[70%]">
    <div className="mt-3 pt-3 ml-5 w-[100%] h-60 rounded-md bg-slate-250 text-base md:text-lg bg-white">  
      <div className="pl-5 pt-3  ">
      <TextField
      variant="outlined"
      sx={{ width: '250px',padding:'4px' }}
      InputProps={{ 
        startAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
        style:{height:"40px"}
      }}
   
    />
      </div>
    <div >  
    
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell rowSpan={4} >
              DATE
              <IconButton size="small" >
                <FilterAltOutlinedIcon  className="ml-7"/>
              </IconButton>
            </TableCell>
            
            <TableCell rowSpan={4} >
              EXP NO.
              <IconButton size="small">
                <FilterAltOutlinedIcon />
              </IconButton>
            </TableCell>
            <TableCell rowSpan={5}>
              PARTY
              <IconButton size="small">
                <FilterAltOutlinedIcon />
              </IconButton>
            </TableCell>
            <TableCell rowSpan={4}>
              PAYMENT TYPE
              <IconButton size="small">
                <FilterAltOutlinedIcon />
              </IconButton>
            </TableCell>
            <TableCell rowSpan={2} >
              AMOUNT
              <IconButton size="small">
                <FilterAltOutlinedIcon />
              </IconButton>
            </TableCell>
            <TableCell rowSpan={2} >
              BALANCE
              <IconButton size="small">
                <FilterAltOutlinedIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>

    </div>
 </div>
    </div>
      </div>
    </div>
     );
}
 
export default ExpenseItem;