"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MessageIcon from "@mui/icons-material/Message";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";

const links = [
  "About",
  "Blog",
  "Courses",
  "Career",
  "Contact",
  "Testimonial",
  "Placements",
  "Gallery",
  "Privacy Policy",
  "Terms & Conditions",
];

const footerRoutes = {
  About: "/about",
  Blog: "/blog",
  Courses: "/courses",
  Career: "/career",
  Contact: "/contact",
  Testimonial: "/testimonial",
  Placements: "/placements",
  Gallery: "/gallery",
  "Privacy Policy": "/privacypolicy",
  "Terms & Conditions": "/terms&conditions",
};

export default function Footer() {
  const router = useRouter;
  return (
    <Box
      sx={{
        border: "1px solid #FFF8F0",
        bgcolor: "white",
        padding: 7,
        minHeight: "400px",
        margin: 1,
        display: "flex",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
          }}
        >
          <source src="Images/rims.mp4" type="video/mp4" />
        </video>
        <Typography sx={{ marginTop: 15, fontSize: 17 }}>
          The leading course provider in India and UAE
        </Typography>
        <Box sx={{ display: "flex", marginTop: 5, whiteSpace: "nowrap" }}>
          <Typography sx={{ display: "flex", marginTop: 15 }}>
            © 2025 Copyright{" "}
            <span style={{ color: "#129A6A", marginLeft: 8 }}>
              Redcresent International.
            </span>{" "}
            All rights reserved
          </Typography>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 15,
              marginLeft: 85,
            }}
          >
            Powered By{" "}
            <span style={{ color: "#129A6A", marginLeft: 8 }}>
              Red Crescent Hospital
            </span>
          </Typography>
        </Box>
        <Tooltip title="Whatsapp" placement="left">
          <IconButton
            href="https://www.whatsapp.com/"
            target="_blank"
            sx={{
              color: "#25D366",
              width: 45,
              height: 45,
              borderRadius: "50%",
              transition: "all 0.2s ease",
              marginLeft: 173,

              "&:hover": {
                bgcolor: "#25D366",
                color: "white",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ marginLeft: 5 }}>
        <Typography
          variant="h5"
          sx={{ display: "flex", justifyContent: "flex-start", margin: -2 }}
        >
          Useful Links
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 180px)",
            rowGap: 2,
            marginTop: 6,
            marginRight: 500,
          }}
        >
          {links.map((link) => (
            <Typography key={link}>
              <Link
                href={footerRoutes[link]}
                onClick={(e) => {
                  router.push(footerRoutes[link]);
                }}
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                {link}
              </Link>
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: 45,
            marginTop: -31,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Address
          </Typography>
        </Box>
        <Typography
          sx={{
            display: "flex",
            marginLeft: 47,
            width: 300,
          }}
        >
          Red crescent hospital compound, Feroke,chungam Road
          <br />
          Ramanattukara
          <br />
          Kozhikode
          <br />
          Kerala- 673631
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginLeft: 90,
            marginRight: 18,
            marginTop: -21,
          }}
        >
          <Typography variant="h5">Social Media</Typography>
          <Box sx={{ display: "flex", marginTop: 5, marginLeft: -16 }}>
            <IconButton
              href="https://www.facebook.com/"
              target="_blank"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  border: "1px solid #129A6A",
                  borderRadius: 5,
                  height: 35,
                  width: 45,
                  bgcolor: "#1877F2",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/rims_edu?igsh=a3cxbmdnYzFid2V1"
              target="_blank"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  border: "1px solid #129A6A",
                  borderRadius: 5,
                  height: 35,
                  width: 45,
                  bgcolor: "#E1306C",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://x.com/"
              target="_blank"
              sx={{
                color: "#000000",
                "&:hover": {
                  color: "white",
                  border: "1px solid #129A6A",
                  borderRadius: 5,
                  height: 35,
                  width: 45,
                  bgcolor: "#000000",
                },
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/"
              target="_blank"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  border: "1px solid #129A6A",
                  borderRadius: 5,
                  height: 35,
                  width: 45,
                  bgcolor: "#0A66C2",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/"
              target="_blank"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  border: "1px solid #129A6A",
                  borderRadius: 5,
                  height: 35,
                  width: 45,
                  bgcolor: "#FF0000",
                },
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: -453,
          marginTop: 11,
        }}
      >
        <MessageIcon sx={{ marginRight: 2 }} />

        <Typography
          component="a"
          href="mailto:info@redcresent.com"
          sx={{
            color: "black",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: 16,
            height: 25,
          }}
        >
          rchrimsferook.com
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            whiteSpace: "nowrap",
            marginLeft: -22,
            marginBottom: 10,
            color: "black",
            textDecoration: "none",

            height: 200,
            width: 10,
          }}
        >
          <PhoneIcon sx={{ marginBottom: 10 }} />
          <Typography
            component="a"
            href="tel:+919876543210"
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: 16,
              "&:hover": { textDecoration: "underline" },
              marginBottom: 10,
            }}
          >
            +91 9947993382
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
