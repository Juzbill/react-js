"use client"
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SaleOrderHome = () => {
    const router = useRouter();

    return ( 
        <div className=" w-[88%]">
        <div className="px-5 py-2 gap-24 w-[95%] items-center justify-center rounded-md bg-slate-250  flex text-base md:text-lg bg-white ml-4">
      <Link
        className="w-[40%] text-green-500 hover:underline mr-4 items-center justify-center "
        href={"/"}
      >
        SALE ORDERS
      </Link>
      <Link className="mr-4"  href={"/app/items/serviceitem"}> ONLINE ORDERS </Link>


    </div>
        <div className="w-100% flex h-screen items-center justify-center ">
            
      <div className="text-center">
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: 'orange' }}
          onClick={() => router.push("/app/sales/saleorderdetail")}

        >
          Add Your First Sale Order
        </Button>
      </div>
    </div>
    </div>
     );
}
 
export default SaleOrderHome;