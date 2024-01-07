"use client";
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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  InputBase,
  ListSubheader,
  alpha,
  styled,
} from "@mui/material";
import { green, pink } from "@mui/material/colors";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useRouter } from "next/navigation";
import SVG from "next/image";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 260;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // backgroundColor : #00001A;
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface IAppDrawerLeft {
  onCompanyClick: () => void;
}
const menu = [{}];

export default function AppDrawerLeft({ onCompanyClick }: IAppDrawerLeft) {
  // state for handling nested sale
  const [SaleOpen, setSaleOpen] = React.useState(false);

  const handleSaleClick = () => {
    setSaleOpen(!SaleOpen);
  };
  const [PurchaseOpen, setPurchaseOpen] = React.useState(false);

  const handlePurchaseClick = () => {
    setPurchaseOpen(!PurchaseOpen);
  };
  const [BankOpen, setBankOpen] = React.useState(false);

  const handleBankClick = () => {
    setBankOpen(!BankOpen);
  };

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
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Button
              variant="contained"
              startIcon={<ReceiptIcon />}
              sx={{
                textTransform: "none",
                background: "blue",
                borderRadius: "1.5rem",
              }}
            >
              Add Sale
            </Button>
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                textTransform: "none",
                background: "red",
                borderRadius: "1.5rem",
              }}
            >
              Add Purchase
            </Button>
            <Button
              variant="outlined"
              startIcon={<AddCircleIcon />}
              sx={{
                textTransform: "none",
                background: "#CCE0FF",
                border: "1px solid #0066FF",
                borderRadius: "1.5rem",
              }}
            >
              Add More
            </Button>
            <IconButton color="primary" aria-label="add">
              <SVG
                src={"/icons/Privacy.svg"}
                height={20}
                width={20}
                alt="privacy"
              />
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
            color: "#F2F7FF",
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
              className="flex flex-row gap-2 justify-between items-center "
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
                <HomeRoundedIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => router.push("/app/parties/customers")}
            >
              <ListItemIcon>
                <GroupIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Customers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/suppliers")}>
              <ListItemIcon>
                <LocalShippingIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Suppliers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/items")}>
              <ListItemIcon>
                <CategoryRoundedIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItemButton>
          </ListItem>
          {/* // ADDING SALE */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleSaleClick}>
              <ListItemIcon>
                <CurrencyRupeeRoundedIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary="Sale" />
              {SaleOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={SaleOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales/create")}
              >
                <ListItemIcon>
                  <span style={{ marginRight: "16px" }}>+</span>
                </ListItemIcon>
                <ListItemText primary="Add Sale" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Estimate" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Collect-Payment" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Sale Order" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Delivery Challan" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Sale Return" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Debit Note" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* // ENDING SALE */}
          {/* PURCHASE START */}
          <ListItem disablePadding>
            <ListItemButton onClick={handlePurchaseClick}>
              <ListItemIcon>
                <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary="Purchase" />
              {PurchaseOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={PurchaseOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <span style={{ marginRight: "16px" }}>+</span>
                </ListItemIcon>
                <ListItemText primary="Add Purchase" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Payment-Out" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Purchase-Order" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Purchase Return" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Credit Note" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* PURCHASE END */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/app/expenes")}>
              <ListItemIcon>
                <AccountBalanceWalletIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Expenses"} />
            </ListItemButton>
          </ListItem>
          {/* BANKING START */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleBankClick}>
              <ListItemIcon>
                <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary="Cash & Bank" />
              {PurchaseOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={BankOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/bankdetails")}
              >
                <ListItemIcon>
                  <span style={{ marginRight: "16px" }}>+</span>
                </ListItemIcon>
                <ListItemText primary="Bank Accounts" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/bankdetails")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Cash Management" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Cheques" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => router.push("/app/sales")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Loan Accounts" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* BANKING END */}
          {/* SETTINGS */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => router.push("/app/settings/settingsnav")}
            >
              <ListItemIcon>
                <SettingsIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
          {/* SETTINGS END */}
        </List>
      </Drawer>
    </Box>
  );
}
