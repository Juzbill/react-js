"use client"
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ExpenseHome = () => {
    return ( 
        <div className="w-100% flex h-screen items-center justify-center ml-72">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Add Your 1st Expense</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          style={{ backgroundColor: 'red' }}
        //   onClick={handleButtonClick}
        >
          Add Expense
        </Button>
      </div>
    </div>
     );
}
 
export default ExpenseHome;