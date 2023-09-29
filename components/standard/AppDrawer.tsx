"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import { Avatar, Button, IconButton, InputBase, alpha, styled } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useRouter } from "next/navigation";
import SVG from "next/image";
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface IAppDrawerLeft {
  onCompanyClick: () => void;
}
const menu = [{}];

export default function AppDrawerLeft({ onCompanyClick }: IAppDrawerLeft) {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: "white",
          color: "#8e95a5",
        }}
      >
        <Toolbar style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          gap:"0.75rem"
        }}>
          <div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
          </div>
          <div style={{
            display:"flex",
            gap:"0.5rem"
          }}>
            <Button variant="contained"  startIcon={<ReceiptIcon/>} sx={{ textTransform: "none",background:"blue",borderRadius:"1.5rem" }}>
              Add Sale
            </Button>
            <Button variant="contained"  startIcon={<AddShoppingCartIcon/>} sx={{ textTransform: "none" ,background:"red",borderRadius:"1.5rem"}}>
              Add Purchase
            </Button>
            <Button variant="outlined"  startIcon={<AddCircleIcon/>} sx={{ textTransform: "none" ,background:"#CCE0FF",border:"1px solid #0066FF",borderRadius:"1.5rem"}}>
              Add More
            </Button>
            <IconButton color="primary" aria-label="add">
             <SVG src={"/icons/Privacy.svg"} height={20} width={20} alt="privacy"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            background: "#00001A",
            color: "white",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ padding: 0 }}>
          <ListItem disablePadding>
            <ListItemButton
              className="flex flex-row gap-2 justify-between items-center"
              onClick={onCompanyClick}
            >
              <Avatar sx={{ bgcolor: pink[500] }}>
                <AddBusinessRoundedIcon />
              </Avatar>
              <ListItemText
                primary={"My Company"}
                sx={{ marginLeft: "0.5rem" }}
              />
              <NavigateNextRoundedIcon />
            </ListItemButton>
          </ListItem>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/dashboard")}>
              <ListItemIcon>
                <HomeRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/customers")}>
              <ListItemIcon>
                <GroupIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Customers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/items")}>
              <ListItemIcon>
                <CategoryRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/sales")}>
              <ListItemIcon>
                <CurrencyRupeeRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Sales"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/purchases")}>
              <ListItemIcon>
                <StoreRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Purchases"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
