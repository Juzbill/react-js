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
import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";

const drawerWidth = 240;

export default function AppDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: "#1e2129",
          color: "#8e95a5",
          boxShadow: "0 14px 27px #16181e",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            background: "#1e2129",
            color: "#8e95a5",
            boxShadow: "0 14px 27px #16181e",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Customers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CurrencyRupeeRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Sales"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
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
