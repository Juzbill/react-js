import "./supplierhome.css";
import React from "react";
import Image from "next/image";
import { Box,  Typography, Button, TextField, Paper, Grid, ImageList, List, ListItem, ListItemText, InputBase } from '@mui/material';



const customerbalance = [
  { id: 1, name: "John", balance: 1000.0 },
  { id: 2, name: "Alice", balance: 2500.0 },
  { id: 3, name: "Bob", balance: 1500.0 },
  { id: 4, name: "Eve", balance: 2000.0 },
  { id: 5, name: "Bob", balance: 2500.0 },
  { id: 6, name: "Eve", balance: 2800.0 },
  { id: 7, name: "Alice", balance: 32000.0 },
];
const recentcustomer = [
  { id: 1, name: "Alexander", creditlimit: 1000.0 }
];

const customerdetail=[
  {phone:9876543210, emailid:"Alexander123@gmail.com"}
]

const SupplierHome: React.FC = () => {
  return (
    <Box className="sup-homewrapper" sx={{ width: '100%', height: 'auto', backgroundColor: '#f2f7ff', marginTop: '-30px' }}>
    <Box sx={{ display: 'flex', width: '1008px', alignItems: 'center', marginTop: '12px', marginLeft: '16px', height: '40px', borderRadius: '4px', background: '#fff' }}>
    <Box className="sup-customer" sx={{ width: '137px' }}>
      <Typography variant="h5" sx={{ color: '#06f', fontWeight: 500, marginLeft: '24px', fontSize:'14px',textTransform: 'uppercase' }}>
        SUPPLIERS
      </Typography>
    </Box>
    </Box>

      <Box className="sup-midwrapper" sx={{ width:'1390px', height: '590px', borderRadius: '8px 8px 0px 0px', marginTop: '12px', marginLeft: '16px', display: 'flex'}}>
        <Box className="sup-leftwrapper" sx={{flexBasis: '22%', borderRadius: '8px 8px 0px 0px', backgroundColor: '#fff'}}>
          <Box className="sup-addwrapper" sx={{width:'90%', height: '60px', marginLeft: '16px', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
 <Box className="sup-search" sx={{width:'268px',height:'36px', display:'flex', alignItems:'center'}} >
 <Box className="sup-search-bar" sx={{display:'flex', width:'148px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
      <img src="/Customers/search.svg" alt="party filter" width={16} height={16} />
<InputBase placeholder='Search' fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
      </Box>
    
    <Box className="sup-add" sx={{width: '180px',borderRadius:'4px', backgroundColor: '#06f', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
              <Button >
                <Typography sx={{fontSize:'12px', fontWeight:'400', color:'white'}}>+ Add Customers</Typography>
              </Button>
            </Box>
            </Box>
          </Box>
          
          <Box className="sup-detail-bal-wrapper" sx={{ width: '90%', height: 'auto', marginLeft: '16px', marginTop: '8px' }}>
      <Paper elevation={0} className="sup-detail-filter-wrapper" sx={{ background: '#f6f6f6', border: '1px solid #e6e6e6' }}>
        <Grid container alignItems="center">
          <Grid item xs={6} className="sup-detail-left" sx={{width:'150px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'14px' }}>
              Party
            </Typography>
            <ImageList sx={{marginLeft:'25px', marginTop:'3px'}}>
            <img src="/Customers/partfilter.svg" alt="party filter" width={16} height={16} />
            </ImageList>
          </Grid>
          <Grid item xs={6} className="sup-detail-right" sx={{width:'118px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'14px', marginLeft:'10px' }}>
              Amount
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
   
            {/* CODE FOR RENDER THE PARTY NAME AND BALANCE DETAILS */}
            <Box className="sup-bal-detail-wrapper" sx={{ display: 'flex' }}>
      <List component="ul">
        {customerbalance.map((customer, index) => (
          <ListItem key={index} className="sup-balance">
            <ListItemText>
              <Typography variant="h6" className="sup-balance-name" sx={{ width:'150px', color: '#666', fontSize: '16px', fontWeight: 400, padding: '8px 0px 8px 10px' }}>
                {customer.name}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6" className="sup-balance-amount" sx={{ padding:'8px',color: '#D01717', fontSize: '16px', fontWeight: 500 }}>
                {customer.balance}
              </Typography>
            </ListItemText>
            <ListItemText sx={{display: 'flex', width: '18px', height: '18px', justifyContent: 'center',alignItems: 'center', marginLeft:'30px'}}>
              <Image src="/Customers/dots.svg" alt="dots" width={15} height={15} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
    <Box className="sup-rightwrapper" sx={{ width:'692px', height: '590px', borderRadius: '8px 8px 0px 0px',  marginLeft: '16px', display: 'flex',background: '#FFF', position:'relative'}}>
    <Box className="sup-detail" sx={{width:'620px', height:'140px', borderRadius: '12px'}}>
<Box className="sup-detail-wrapper" sx={{width:'660px', height:'140px', borderRadius: '12px',border: '1px solid var(--line-Color, #E6E6E6)',
background: 'linear-gradient(113deg, rgba(230, 230, 230, 0.25) 12.31%, rgba(240, 240, 240, 0.05) 57.41%, rgba(230, 230, 230, 0.10) 123.61%)', margin:'18px'}}>
    <Box className="sup-profile" sx={{width: '660px',height: '47px', background: 'rgba(230, 230, 230, 0.30)', display:'flex', marginTop:'14px'}}>
    <List>
    {recentcustomer.map((recent,index)=>(
      <ListItem key={index}>
      
    <Typography className="sup-name" sx={{color:'#1A1A1A',fontSize: '16px',fontWeight: '500', width:'263px', height:'19px', marginLeft:'20px'}}>
      {recent.name}
    </Typography>
   
    <Typography className="sup-creditLimit" variant="body2" sx={{display:'flex', alignItems:'center', marginLeft:'160px'}}>
      Credit Limit: Rs.{recent.creditlimit}
    </Typography>
  
    </ListItem>
    ))}
    </List>
  </Box>
  <Box className="sup-address-wrapper" sx={{marginLeft:'20px'}}>
  <List>
      {customerdetail.map((detail,index)=>(
        <Box key={index}>
    <Box className="sup-phone" sx={{display:'flex', alignItems:'center', marginTop:'7px'}}>
      <Typography className="sup-phonekey" variant="body2" >
        Phone:
      </Typography>
      <Typography className="sup-phonevalue" variant="body2" >
        {detail.phone}
      </Typography>
      
    </Box>
    <Box className="sup-email" sx={{display:'flex', alignItems:'center'}}>
      <Typography className="sup-emailkey" variant="body2">
        Email:
      </Typography>
      <Typography className="sup-emailvalue" variant="body2">
        {detail.emailid}
      </Typography>
    </Box>
    <Box className="sup-gst" sx={{display:'flex', alignItems:'center'}}>
      <Typography className="sup-gstkey" variant="body2">
        Gst:
      </Typography>
      <Typography className="sup-gstvalue" variant="body2"sx={{color:'#06F'}}>
        Add GSTIN
      </Typography> 
      </Box>
      </Box>
      ))}
      </List>
  
    </Box>
    <Box className="sup-reminders-wrapper" sx={{width:'140px', right: '76px', top: '106px', height:'36px',position: 'absolute', marginLeft:'400px',display:'flex', padding: '8px 16px',alignItems: 'center',borderRadius: '8px',border: '0.5px solid rgba(32, 32, 32, 0.10)',background: 'rgba(206, 244, 219, 0.50)'}}>
      <Image src="/Customers/clock.svg" alt="clock" width={20} height={20} />
      <Typography sx={{fontSize: '12px', fontWeight: 400, padding: '8px'}}>Reminder</Typography>
      <Image src="/Customers/arrow.svg" alt="arrow" width={12} height={12} />
    </Box>
  </Box>
   <Box className="sup-transaction-wrapper" sx={{width:'676px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF', height:'40px', display: 'inline-flex',alignItems: 'center',}}>
   <Box className="sup-trans" sx={{ display: 'flex', width: '139px',height: '40px', padding: '12px 16px', alignItems: 'center', marginLeft:'16px' }}>
       <Typography className="sup-transbar" sx={{width:'107px', height:'17px',fontSize: '14px',fontWeight: 500,}}>All Transaction</Typography>
      </Box>
      <Box className="sup-trans-search" sx={{display:'flex', width:'180px', height:'32px', padding: '7px 10px',marginLeft:'320px',alignItems: 'center'}}>
      <img src="/Customers/search.svg" alt="party filter" width={16} height={16} />
<InputBase placeholder='Search' fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
      </Box>
  </Box>
  </Box>
 </Box>
  </Box>
 </Box>
  )
}

export default SupplierHome;
