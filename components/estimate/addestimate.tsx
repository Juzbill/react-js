"use client";
import { useState } from "react";
import {
  Box,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField, Typography, Button,Menu, MenuItem,Checkbox} from "@mui/material";
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const AddEstimate: React.FC = () => {
    const [asOfDate, setAsOfDate] = useState(() => {
        const currentDate = new Date();
        return currentDate.toLocaleDateString('en-GB'); 
      });
    

  return (
    <div className="bg-white w-[100%]">
      <div>
        <div className="flex">
          <Typography variant="h5" className="mt-3 ml-8">Estimate/Quotation</Typography>
          
        </div>

        {/* PARTY SELECTOR */}

        <div className="mt-10 flex "
         
        >
          {/* Billing Name Input */}
          <div className="ml-10">
            <TextField
              fullWidth
              id="billingName"
              label="Party*"
              variant="outlined"
              sx={{ width: "250px" }}
              InputProps={{ style: { height: "40px" } }}
            />
          </div>

          <div className=" flex ml-auto mr-5">
    <Typography>Invoice Number </Typography>
    <TextField  variant="standard" />
    </div>
    </div>
    <div className="flex justify-end mr-5 mt-1">
    <Typography className="mt-3">Invoice Date </Typography>

<TextField variant="outlined" sx={{ width: '200px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
    </div>
    <div className=" flex justify-end mr-5 mt-1">
    <Typography className="mt-3">State of Supply </Typography>
    <TextField  variant="outlined" sx={{ width: '200px',padding:'4px' }}
    InputProps={{style:{height:"40px"}}} />
    </div>
    
        <div>
      <TableContainer className="mt-10">
        <Table sx={{ minWidth: 1200 }} aria-label="spanning table" >
          <TableHead>
          <TableRow>
  <TableCell sx={{ width: '5%' }}>#</TableCell>
  <TableCell sx={{ flex: 1 }}>ITEM</TableCell>
  <TableCell sx={{ width: '8%' }}>QTY</TableCell>
  <TableCell sx={{ width: '8%' }}>UNIT</TableCell>
  <TableCell sx={{ width: '15%' }}>PRICE/UNIT</TableCell>
  <TableCell sx={{ width: '15%' }}>DISCOUNT</TableCell>
  <TableCell sx={{ width: '10%' }}>TAX</TableCell>
  <TableCell sx={{ width: '10%' }}>AMOUNT</TableCell>
</TableRow>

          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell colSpan={1} align="right" className="mr-5">
                Total
              </TableCell>
              <TableCell align="left">0</TableCell>
              <TableCell rowSpan={2} />
              <TableCell rowSpan={2} />
              <TableCell rowSpan={2} />
              <TableCell rowSpan={2} />
              <TableCell rowSpan={2} />

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
   
</div>
      <div className="flex justify-end mr-10 mt-10" style={{ alignItems: 'center' }}>
  <Typography variant="h6" >Total</Typography>
  <TextField
    variant="outlined"
    sx={{ width: '180px', padding: '4px' }}
    InputProps={{ style: { height: "40px" } }}

  />
</div>


<div className="mt-10 flex justify-end mr-10 pb-4">

<Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}}>
           Save 
           </Button>
 </div>

        
      </div>
    </div>
  );
};

export default AddEstimate;
