import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@mui/material/Button";
import NextImage from "next/image";

const MotionImage = motion(NextImage);

const Image = [
  {
    id: 1,
    url: "/Images/head1.jpeg",
  },
  {
    id: 2,
    url: "/Images/head2.jpeg",
  },
  {
    id: 3,
    url: "/Images/head3.jpeg",
  },
  {
    id: 4,
    url: "/Images/Teacher.jpeg",
  },
  {
    id: 5,
    url: "/Images/stage.jpeg",
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
    <Box className="relative h-[55vh] w-full max-w-full overflow-hidden sm:h-[70vh] lg:h-[90vh]" sx={{ position: "relative" }}>
      <AnimatePresence initial={false} mode="sync">
        <MotionImage
          key={Image[current].id}
          src={Image[current].url}
          alt="Red Crescent Medical Institute campus"
          fill
          priority={current === 0}
          loading={current === 0 ? "eager" : "lazy"}
          sizes="100vw"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 block object-cover"
          style={{
            filter: "brightness(60%)",
            objectPosition: current === 4 ? "center bottom" : "center",
          }}
        />
      </AnimatePresence>

      <IconButton
        onClick={Nextimage}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 8, sm: 20 },
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
          left: { xs: 8, sm: 20 },
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
        className="absolute left-4 top-1/2 z-10 w-[calc(100%_-_2rem)] -translate-y-1/2 text-white sm:left-16 sm:w-auto sm:max-w-2xl"
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 16, sm: 64 },
          transform: "translateY(-50%)",
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
          sx={{ fontSize: { xs: "1.7rem", sm: "3rem" }, lineHeight: 1.2 }}
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
          sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          The leading course provider in India & Dubai
        </Typography>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSeuPW7LBshuoNXyXf5_Be0HJuv6jCi7zOpU1nFRSjmB2rgeQQ/viewform?usp=sharing&ouid=111701974333241427644"
          target="_blank"
          sx={{
            fontSize: { xs: 16, sm: 20 },
            marginRight: { xs: 0, sm: 15 },
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
