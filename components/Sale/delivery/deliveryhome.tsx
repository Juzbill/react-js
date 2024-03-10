"use client"
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const DeliveryHome = () => {
    const router = useRouter();

    return ( 
        <div className=" w-[88%]">
                <div className="w-100% flex h-screen items-center justify-center ">
            
      <div className="text-center">
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: 'orange' }}
          onClick={() => router.push("/app/deliverychallan/deliverydetails")}

        >
          Add Your First Delivery Challan
        </Button>
      </div>
    </div>
    </div>
     );
}
 
export default DeliveryHome;