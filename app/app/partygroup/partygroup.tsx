import "./partygroup.css";
import React from "react";
import Image from "next/image";
import { Box,  Typography, Button, Paper, Grid, ImageList, List, ListItem, ListItemText, InputBase } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Partygroup: React.FC = () => {
  return (
    <Box className="homewrapper" sx={{ width: '100%', height: 'auto', backgroundColor: '#f2f7ff', marginTop: '-30px' }}>
  
    <Box className="midwrapper" sx={{ width:'1390px', height: '590px', borderRadius: '8px 8px 0px 0px', marginTop: '12px', marginLeft: '16px', display: 'flex'}}>
        <Box className="leftwrapper" sx={{flexBasis: '22%', borderRadius: '8px 8px 0px 0px', backgroundColor: '#fff'}}>
          <Box className="addwrapper" sx={{width:'90%', height: '60px', marginLeft: '16px', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
 <Box className="search" sx={{width:'268px',height:'36px', display:'flex', alignItems:'center'}} >
 <Box className="search-bar" sx={{display:'flex', width:'168px', height:'32px', padding: '7px 10px',alignItems: 'center'}}>
      <img src="/Customers/search.svg" alt="party filter" width={16} height={16} />
<InputBase placeholder='Search' fullWidth sx={{border: 'none',outline: 'none',color: '#b3b3b3',fontSize: '14px',marginLeft:'8px',fontWeight:'400'}}/>
      </Box>
      <Box className="cxadd" sx={{width: '220px',borderRadius:'4px', backgroundColor: 'orange', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
              <Button >
                <Typography sx={{fontSize:'12px', fontWeight:'400', color:'white'}}>+ Add Party Group</Typography>
              </Button>
            </Box>
      </Box>
      </Box>
      <Box className="cx-detail-bal-wrapper" sx={{ width: '100%', height: 'auto'}}>
      <Paper elevation={0} className="cx-detail-filter-wrapper">
        <Grid container alignItems="center">
          <Grid item xs={6} className="cx-detail-left" sx={{width:'150px', display:'flex', padding: '8px 10px'}}>
              <ArrowUpwardIcon sx={{color:'gray', marginLeft:'5px'}}/>
            <Typography variant="h6" sx={{ color: 'gray', fontWeight: 400, fontSize:'12px' }}>
              GROUP
            </Typography>
          </Grid>
          <Grid item xs={6} className="cx-detail-right" sx={{width:'118px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: 'gray', fontWeight: 400, fontSize:'12px', marginLeft:'45px' }}>
              PARTY
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
      <Box className="cx-detail-bal-wrapper" sx={{ width: '100%', height: 'auto' }}>
      <Paper elevation={0} className="cx-detail-filter-wrapper" sx={{ background: ' rgb(173, 216, 230)'}}>
        <Grid container alignItems="center">
          <Grid item xs={6} className="cx-detail-left" sx={{width:'130px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'14px' }}>
              General
            </Typography>
          </Grid>
          <Grid item xs={4} className="cx-detail-right" sx={{width:'98px', display:'flex', padding: '8px 10px'}}>
            <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'14px', marginLeft:'60px' }}>
              0
            </Typography>
          </Grid>
          <Grid item xs={2} className="cx-detail-right" sx={{width:'28px', display:'flex'}}>
             <MoreVertIcon />
          </Grid>
        </Grid>
      </Paper>
    </Box>
    
      </Box>
      <Box className="cx-rightwrapper" sx={{ width:'722px', height: '90px', borderRadius: '8px 8px 8px 8px',  marginLeft: '16px', background: '#FFF', position:'relative'}}>
     <Box>
     <Box sx={{width:'700px', marginTop:'10px', display:'flex'}}>
      <Box sx={{width:'222px',marginLeft:'10px'}}>
        <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 400, fontSize:'14px' }}>
           GENERAL   
            </Typography>
             </Box>
             <Box sx={{width:'322px',marginLeft:'390px'}}>
              <Button>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, fontSize:'12px', background:'#06f', borderRadius:'8px', padding:'8px' }}>
           Move To This Group   
            </Typography>
            </Button>
            </Box>
           </Box>
           <Box sx={{ marginLeft:'10px', display:'flex'}}>
              <Typography>Parties(0) </Typography>

              <Typography sx={{color:'green', marginLeft:'9px'}}> Rs 0.00</Typography>
 </Box>
            </Box>
          
            <Box className="cx-right-wrapper" sx={{ width:'722px', height: '490px', borderRadius: '8px 8px 0px 0px', marginTop:'20px', background: '#FFF'}}>
<Box sx={{display:'flex'}}>
<Box sx={{width:'222px',marginLeft:'10px', marginTop:'25px'}}>
        <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 500, fontSize:'14px' }}>
           PARTIES
            </Typography>
             </Box>
<Box className="search-bar" sx={{display:'flex', width:'258px', height:'35px', padding: '7px 10px',marginLeft:'220px', border:'1px solid #b3b3b3', marginTop:'20px'}}>
      <img src="/Customers/search.svg" alt="party filter" width={20} height={20} />
<InputBase placeholder='Search' fullWidth sx={{border: 'none',color: '#b3b3b3',fontSize: '16px',marginLeft:'8px',fontWeight:'400'}}/>
      </Box>
</Box>
</Box>  
</Box>
           </Box>
    
 
 </Box>
 
  )
}

export default Partygroup;
