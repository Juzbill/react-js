"use client"
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField, Typography, Button,Menu, MenuItem,Checkbox} from "@mui/material";
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Expense() {

  // date
  const [asOfDate, setAsOfDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB'); 
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div className="w-full ">

    <Paper >
    <div className=" p-5">
    <Typography>EXPENSE</Typography>

</div>

    <div className="pl-10 pt-5 flex">
<TextField label="Expense Category*" variant="outlined" sx={{ width: '240px',padding:'4px' }} InputProps={{style:{height:"40px"}}} />
<div className=" flex ml-auto mr-5">
    <Typography>Expense No </Typography>
    <TextField  variant="standard" />
    </div>
</div>
<div className=" flex justify-end mr-5">
<TextField label="Date" variant="outlined" sx={{ width: '200px',padding:'4px' }} 
        InputProps={{style:{height:"40px"}}} 
        value={asOfDate}
      onChange={(e) => setAsOfDate(e.target.value)}/>
    </div>
        <div>
      <TableContainer className="mt-2 ">
        <Table sx={{ minWidth: 1200 }} aria-label="spanning table" >
          <TableHead>
          <TableRow>
  <TableCell sx={{ width: '5%' }}>#</TableCell>
  <TableCell sx={{ flex: 1 }}>ITEM</TableCell>
  <TableCell sx={{ width: '10%' }}>QTY</TableCell>
  <TableCell sx={{ width: '15%' }}>PRICE/UNIT</TableCell>
  <TableCell sx={{ width: '15%' }}>AMOUNT</TableCell>
</TableRow>

          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell colSpan={1} align="right" className="mr-5">
                Subtotal
              </TableCell>
              <TableCell align="left">0</TableCell>
              <TableCell rowSpan={2} />
              <TableCell rowSpan={2} />

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
   
</div>
<div className="pl-10  flex pt-5">
 <TextField label="Payment Type" variant="outlined" sx={{ width: '240px',padding:'4px' }} InputProps={{style:{height:"40px"}}} onClick={handleClick} endIcon={<ArrowDropDownIcon />}/>
              <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >Bank </MenuItem>
        <MenuItem >Cash </MenuItem>
        <MenuItem >Cheque</MenuItem>
      </Menu>
      <div className="flex ml-auto mr-10" style={{ alignItems: 'center' }}>
  <Typography variant="h6" >Total</Typography>
  <TextField
    variant="outlined"
    sx={{ width: '180px', padding: '4px' }}
    InputProps={{ style: { height: "40px" } }}

  />
</div>

 </div>
<div className="mt-10 flex justify-end mr-10 pb-4">

<Button variant="contained" sx={{fontSize:'12px', fontWeight:'400'}}>
           Save 
           </Button>
 </div>

</Paper>
    </div>
  );
}
