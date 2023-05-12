import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";

import {
  AiOutlineAppstore,
  AiOutlineHistory,
  AiOutlineSave,
} from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useAuthContext } from "../auth/authContext";

import { Button, Typography, Divider ,useTheme} from "@mui/material";

//for now used css, will upgrade to styled later on
import "../index.css";

const SideBar = ({ type }) => {
  const { collapsed } = useProSidebar();
  const logoutHandler = useAuthContext().logoutHandler;

  const theme=useTheme();

  const menuItemsStyle = {
    paddingLeft: collapsed ? "1rem" : "2rem",
    paddingBottom: "15px",
    color: theme.palette.black[900],
    fontWeight: 50,
    fontSize: "large",
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        backgroundColor="#f8f9e"
        className="app"
        width="12rem"
        height="relative"
      >
        <Typography
          sx={{ marginLeft: collapsed ? "1rem" : "1.8rem", marginTop: "4rem",fontSize:"18px",color:"darkgoldenrod" }}
        >
          AEROCONNECT
        </Typography>

        <Divider sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
        <Menu>
          <MenuItem
            style={menuItemsStyle}
            component={<Link to="main" />}
            icon={<AiOutlineAppstore />}
          >
            Dashboard
          </MenuItem>

          <MenuItem
            style={menuItemsStyle}
            component={<Link to="orders" />}
            icon={<AiOutlineHistory />}
          >
            History
          </MenuItem>

          <MenuItem
            style={menuItemsStyle}
            component={<Link to="products" />}
            icon={<AiOutlineShoppingCart />}
          >
            {" "}
            Parts{" "}
          </MenuItem>
          <MenuItem
            style={menuItemsStyle}
            component={<Link to="queries" className="link" />}
            icon={<AiOutlineSave />}
          >
            Add Part
          </MenuItem>
          <MenuItem
            style={menuItemsStyle}
            component={<Link to="queries" className="link" />}
            icon={<AiOutlineBell />}
          >
            Requests
          </MenuItem>
          <Divider sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
          <MenuItem
            icon={<AiOutlineLogout />}
            component={<Button onClick={() => logoutHandler()} />}
            style={{
              marginLeft: collapsed ? "0.5rem" : "1.5rem",
              fontWeight:40,
              color:theme.palette.grey[400]
            }}
          >
            {" "}
            Logout{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
