
"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const links = [
  "About",
  "Courses",
  "Careers",
  "Contact",
  "Privacy Policy",
  "Terms & Conditions",
];

const footerRoutes = {
  About: "/about",
  Blog: "/blog",
  Courses: "/courses",
  Contact: "/contact",  
  "Privacy Policy": "/privacypolicy",
  "Terms & Conditions": "/terms-and-conditions",
};

const careersFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXj3lb58OMj9xQrsMyY-tudxxvq-14EQJbyOI3v2e_7FQ9sg/viewform?usp=publish-editor";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        border: "1px solid #FFF8F0",
        bgcolor: "white",
        mt: 2,
        px: { xs: 3, sm: 5, md: 7 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1.3fr 1fr 1fr",
          },
          gap: { xs: 5, md: 6 },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* ================= LEFT SECTION ================= */}
        <Box>
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: { xs: "100%", sm: 280, md: 300 },
              height: 200,
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src="/Images/rims.mp4" type="video/mp4" />
          </Box>

          <Typography
            sx={{
              mt: 3,
              fontSize: 17,
              color: "#333",
              maxWidth: 350,
            }}
          >
            The leading course provider in India and UAE
          </Typography>

          {/* WhatsApp */}
          <Tooltip title="WhatsApp" placement="right">
            <IconButton
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 3,
                color: "#25D366",
                width: 45,
                height: 45,
                borderRadius: "50%",
                transition: "all 0.2s ease",

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

        {/* ================= USEFUL LINKS ================= */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#222",
              mb: 3,
            }}
          >
            Useful Links
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              columnGap: 4,
              rowGap: 2,
            }}
          >
            {links.map((link) => (
              link === "Careers" ? (
                <a
                  key={link}
                  href={careersFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "16px",
                  }}
                >
                  {link}
                </a>
              ) : (
                <Link
                  key={link}
                  href={footerRoutes[link]}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "16px",
                  }}
                >
                  {link}
                </Link>
              )
            ))}
          </Box>
        </Box>

        {/* ================= CONTACT SECTION ================= */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#222",
              mb: 3,
            }}
          >
            Contact Us
          </Typography>

          {/* Address */}
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#444",
              mb: 3,
            }}
          >
            Red Crescent Hospital Compound,
            <br />
            Feroke, Chungam Road
            <br />
            Ramanattukara
            <br />
            Kozhikode
            <br />
            Kerala - 673631
          </Typography>

          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <MessageIcon sx={{ color: "#129A6A" }} />

            <Typography
              component="a"
              href="mailto:info@redcresent.com"
              sx={{
                color: "black",
                textDecoration: "none",
                fontSize: 16,
                wordBreak: "break-word",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              rchrimsferook.com
            </Typography>
          </Box>

          {/* Phone */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <PhoneIcon sx={{ color: "#129A6A" }} />

            <Typography
              component="a"
              href="tel:+919947993382"
              sx={{
                color: "black",
                textDecoration: "none",
                fontSize: 16,

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              +91 9947993382
            </Typography>
          </Box>

          {/* Social Media */}
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              mb: 1,
              fontWeight: 600,
            }}
          >
            Social Media
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              flexWrap: "wrap",
            }}
          >
            {/* Facebook */}
            <IconButton
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  bgcolor: "#1877F2",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>

            {/* Instagram */}
            <IconButton
              href="https://www.instagram.com/rims_edu?igsh=a3cxbmdnYzFid2V1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  bgcolor: "#E1306C",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>

            {/* X */}
            <IconButton
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  bgcolor: "#000000",
                },
              }}
            >
              <XIcon />
            </IconButton>

            {/* LinkedIn */}
            <IconButton
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  bgcolor: "#0A66C2",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            {/* YouTube */}
            <IconButton
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                  bgcolor: "#FF0000",
                },
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* ================= BOTTOM COPYRIGHT ================= */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          mt: 5,
          pt: 3,
          borderTop: "1px solid #e5e5e5",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,

          flexDirection: {
            xs: "column",
            md: "row",
          },

          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography sx={{ fontSize: 14, color: "#555" }}>
          © 2025 Copyright{" "}
          <Box
            component="span"
            sx={{
              color: "#129A6A",
              ml: 0.5,
              fontWeight: 500,
            }}
          >
            Redcresent International.
          </Box>{" "}
          All rights reserved.
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#555" }}>
          Powered By{" "}
          <Box
            component="span"
            sx={{
              color: "#129A6A",
              ml: 0.5,
              fontWeight: 500,
            }}
          >
            Red Crescent Hospital
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

