"use client";
import React, { useState } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import Settings from "./settings";

function SettingSidebar() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Settings Sidebar */}
      <div id="settings-sidebar" className={`bg-gray-200 w-64 p-4 `}>
        <button className="text-xl font-bold text-gray-700 float-right" onClick={closeSettings}>
          ×
        </button>
        <List>
          <Typography className="font-bold text-xl">Settings</Typography>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOptionClick("General")}>
              <ListItemText primary={"General"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOptionClick("Transaction")}>
              <ListItemText primary={"Transaction"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOptionClick("Party")}>
              <ListItemText primary={"Party"} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      {/* Right-side content */}
      <div className="flex-1 p-4">
        {selectedOption === "Party" && <Settings />}
        {/* Add conditions for other options if needed */}
      </div>
    </div>
  );
}

export default SettingSidebar;
