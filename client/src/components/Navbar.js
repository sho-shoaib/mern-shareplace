import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const pages = ["Home", "People", "Profile"];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
    },
  });

  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ cursor: "pointer" }}
            variant='h5'
            onClick={() => navigate("/")}
          >
            SharePlace
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            <ThemeProvider theme={theme}>
              <Button variant='text' onClick={() => navigate("/")}>
                Home
              </Button>
              <Button variant='text' onClick={() => navigate("/users")}>
                People
              </Button>
              <Button variant='text' onClick={() => navigate("/profile")}>
                Profile
              </Button>
            </ThemeProvider>
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <ThemeProvider theme={theme}>
              <div>
                <IconButton
                  aria-controls='menu'
                  aria-label='delete'
                  size='large'
                  onClick={(e) => handleOpenMenu(e)}
                >
                  <MenuIcon fontSize='inherit' color='primary' />
                </IconButton>
                <Menu
                  id='menu'
                  onClose={handleMenuClose}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                >
                  {pages.map((page, i) => {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => {
                          handleMenuClose();
                          page === "Home" && navigate("/");
                          page === "People" && navigate("/users");
                          page === "Profile" && navigate("/profile");
                        }}
                      >
                        {page}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </ThemeProvider>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
