import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../assets/images/logo2.png";
import { useSelector } from "react-redux";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const pages = [
  { pageName: "HOME", route: "/" },
  { pageName: "ABOUT", route: "/about" },
  { pageName: "MARKETING TOOL", route: "/marketingTool" },
  { pageName: "FAQ", route: "/faq" },
  { pageName: "BLOG", route: "/blog" },
  { pageName: "CONTACT", route: "/contact" },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null);

    navigate(route);
  };

  const { colors } = useSelector((state) => {
    return state;
  });

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: colors.mainColor, paddingY: "5px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 15 }}>
              <img src={logo} width={70} height={70} />
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.pageName} onClick={()=>{handleCloseNavMenu(page.route)}}>
                  <Typography textAlign="center">{page.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={logo} width={70} height={70} />
            </Box>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: 20,
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.pageName}
                onClick={() => {
                  handleCloseNavMenu(page.route);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: colors.themeColor,
                    background: "transparent",
                  },
                }}
              >
                {page.pageName}
              </Button>
            ))}
            <Button
              sx={{
                color: colors.textColor,
                "&:hover": {
                  color: colors.themeColor,
                  background: "transparent",
                },
              }}
            >
              ACCOUNT
              <ArrowDropDown />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
