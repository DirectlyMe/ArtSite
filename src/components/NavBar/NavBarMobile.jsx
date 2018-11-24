import React from "react";
import AppBar from "../AppBar/AppBar";
import Drawer from "../Drawer/Drawer";

const NavBar = ({ cartFunc, toggleDrawer, isDrawerOpen }) => {
  return (
    <div style={{ width: "100%", zIndex: 999 }}>
      <AppBar toggleDrawer={toggleDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} />
    </div>
  );
};

export default NavBar;
