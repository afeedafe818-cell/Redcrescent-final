"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Courses", "Contact"];

const routes = {
  Home: "/",
  "About Us": "/about",
  Courses: "/courses",
  Contact: "/contact",
};

function Navbar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                router.push(routes[item]);
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: "white",
          color: "black",
          minHeight: 50,
          top: 0,
          left: 0,
          width: "100%",
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src="/images/redcresent.jpg"
              alt=""
              width={300}
              style={{
                marginLeft: "60px",
                marginTop: 10,
                borderRadius: "10px",
              }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => router.push(routes[item])}
                sx={{
                  color: "Black",
                  fontSize: 15,
                  marginRight: "60px",
                  margin: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderRadius: 10,
                    bgcolor: "#129A6A",
                    color: "white",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuPW7LBshuoNXyXf5_Be0HJuv6jCi7zOpU1nFRSjmB2rgeQQ/viewform?usp=sharing&ouid=111701974333241427644"
              target="_blank"
              sx={{
                fontSize: 20,
                marginRight: 15,
                border: "1px solid green",
                borderRadius: "20px",
                backgroundColor: "#129A6A",
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "white",
                  color: "#129A6A",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      <Typography>QUALITY EDUCATION FOR ALL</Typography>
      <Typography>
        Professional Courses in <br />
        Calicut,Kerala
      </Typography>
      <Typography>
        Welcome to <a href="">Redcrescent Institute of paramedical science</a>,
        a leading professional education institute known for providing
      </Typography>
    </Box>
  );
}

export default Navbar;
