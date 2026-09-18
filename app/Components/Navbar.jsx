"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";
import Image from "next/image";

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Courses", "Contact"];

const routes = {
  Home: "/",
  "About Us": "/about",
  Courses: "/courses",
  Contact: "/contact",
};

function Navbar() {
  const router = useRouter();
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
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeuPW7LBshuoNXyXf5_Be0HJuv6jCi7zOpU1nFRSjmB2rgeQQ/viewform?usp=sharing&ouid=111701974333241427644"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              justifyContent: "center",
              bgcolor: "#129A6A",
              color: "white",
              "&:hover": { bgcolor: "#0d7f56" },
            }}
          >
            <ListItemText primary="Register" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
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
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Image}
            src="/Images/redcresent.jpg"
            alt="Red Crescent Medical Institute"
            width={130}
            height={44}
            sizes="130px"
            sx={{
              display: { xs: "block", sm: "none" },
              width: 130,
              height: "auto",
              marginLeft: "auto",
              borderRadius: "8px",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image
              src="/Images/redcresent.jpg"
              alt="Red Crescent Medical Institute"
              width={300}
              height={90}
              sizes="300px"
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
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuPW7LBshuoNXyXf5_Be0HJuv6jCi7zOpU1nFRSjmB2rgeQQ/viewform?usp=sharing&ouid=111701974333241427644"
              target="_blank"
              rel="noopener noreferrer"
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
      <Button
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeuPW7LBshuoNXyXf5_Be0HJuv6jCi7zOpU1nFRSjmB2rgeQQ/viewform?usp=sharing&ouid=111701974333241427644"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-flex",
          fontSize: { xs: 14, sm: 16 },
          width: 120,
          position: "fixed",
          left: 16,
          bottom: 72,
          zIndex: 1300,
          border: "1px solid green",
          borderRadius: "20px",
          backgroundColor: "#129A6A",
          color: "white",
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            bgcolor: "#0d7f56",
          },
        }}
      >
        Register
      </Button>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
    </Box>
  );
}

export default Navbar;
