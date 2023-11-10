import { Box, FormControl, Typography, TextField, Stack } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import "./addparties.css";
// import Divider from '@mui/material/Divider';








const Addparties: React.FC = () => {
  return (
    <Box className='add-topwrapper' sx={{width:'1008px',background: '#FFF', height:'550px',  borderRadius: '8px'}}>
        <Box className='add-midwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '12px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>Add Party</Typography>
        <Box className="add-setting" sx={{marginLeft:'725px'}} >
        <SettingsIcon sx={{ fontSize: 25, color: '#666' }} />
        </Box>
        <Box className="add-close" sx={{marginLeft:'25px'}} >
        <CloseIcon sx={{ fontSize: 25, color: '#666' }} />
        </Box>
        </Box>
        
        <Box className="add-form" sx={{marginTop:"15px", marginLeft:'22px', display:'flex', color:'#666'}}>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Partyname*" variant="outlined" sx={{ width: '270px' }}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="GSTIN" variant="outlined" sx={{ width: '270px' }}  />
        </FormControl>
        <FormControl sx={{padding:"8px"}}>
        <TextField label="Phone Number" variant="outlined" sx={{ width: '270px' }}  />
       </FormControl>
        </Box>
        <FormControl sx={{padding:"8px", marginLeft:'22px'}}>
        <TextField label="Party Group" variant="outlined" sx={{ width: '270px' }}  />
       </FormControl>

        <Box className='add-lastwrapper' sx={{width:'900px',color:'#666',display: 'flex',height:'40px', marginTop: '22px', marginLeft: '26px',borderBottom: '1px solid var(--line-Color, #E6E6E6)',background: '#FFF'}}>
        <Typography>GST&Address</Typography>
        </Box>

        <Box className="add-gst-form" sx={{marginTop:"35px", marginLeft:'26px', color:'#666'}}>
        <FormControl >
        <TextField label="GST Type" variant="outlined" sx={{ width: '300px' }}  />
        <TextField label="State" variant="outlined" sx={{ width: '300px', marginTop:'10px' }}  />
        <TextField label="Email ID" variant="outlined" sx={{ width: '300px',marginTop:'10px' }}  />
       </FormControl>
        </Box>
        {/* <Stack  divider={<Divider orientation="vertical" />}></Stack> */}
    </Box>
 
 
  )
}

export default Addparties;
