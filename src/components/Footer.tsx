"use client";

import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
const Footer = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ justifyContent: "space-evenly" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
            sx={{ maxWidth: 25, px: 0 }}
          />
          <BottomNavigationAction
            label="Settings"
            value="Settings"
            icon={<SettingsRoundedIcon />}
            sx={{ maxWidth: 25, px: 0 }}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
            sx={{ maxWidth: 25, px: 0 }}
          />
          <BottomNavigationAction
            label="wallet"
            value="wallet"
            icon={<AccountBalanceWalletRoundedIcon />}
            sx={{ maxWidth: 25, px: 0 }}
          />
          <BottomNavigationAction
            label="profile"
            value="profile"
            icon={<ContactEmergencyRoundedIcon />}
            sx={{ maxWidth: 25, px: 0 }}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Footer;
