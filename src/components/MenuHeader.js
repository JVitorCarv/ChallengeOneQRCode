import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const PREFIX_PATH = process.env.REACT_APP_PREFIX_PATH
    ? process.env.REACT_APP_PREFIX_PATH
    : "";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoute = (route) => {
    navigate(`${PREFIX_PATH}${route}`);
    handleClose();
  };

  return (
    <>
      <IconButton
        className="button-icon"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        clas
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleRoute("/reader-qrcode")}>
          Scan QR Code
        </MenuItem>
        <MenuItem onClick={() => handleRoute("/create-qrcode")}>
          Create QR Code
        </MenuItem>
      </Menu>
    </>
  );
}
