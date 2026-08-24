import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

const Image = [
  {
    id: 1,
    url: "Images/head1.jpeg",
  },
  {
    id: 2,
    url: "Images/head2.jpeg",
  },
  {
    id: 3,
    url: "Images/head3.jpeg",
  },
  {
    id: 4,
    url: "Images/Teacher.jpeg",
  },
];
export default function Hero() {
  const [current, setCurrent] = useState(0);

  const Nextimage = () => {
    setCurrent((prev) => (prev + 1) % Image.length);
  };
  const PrevImage = () => {
    setCurrent((prev) => (prev === 0 ? Image.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Image.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <motion.img
        src={Image[current].url}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "90vh",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
      />

      <IconButton
        onClick={Nextimage}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.7)",
          zIndex: 10,
          "&:hover": {
            bgcolor: "white",
          },
        }}
      >
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </IconButton>
      <IconButton
        onClick={PrevImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.7)",
          zIndex: 10,
          "&:hover": {
            bgcolor: "white",
          },
        }}
      >
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      </IconButton>
      <Box
        component={motion.div}
        key={current}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "absolute",
          top: "20%",
          left: 20,
          transform: "translateY(-50%)",
          zIndex: 10,
          marginLeft: "100px",
          color: "white",
        }}
      >
        <Typography
          variant="h6"
          component={motion.h6}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          QUALITY EDUCATION FOR ALL
        </Typography>
        <Typography
          variant="h3"
          component={motion.h3}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience The Best In <br />
          Professional Education With Us
        </Typography>
        <Typography
          variant="h5"
          component={motion.h5}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          The leading course provider in India And Dubai
        </Typography>
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
    </Box>
  );
}
