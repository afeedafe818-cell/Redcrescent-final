"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Map from "../Components/map.jsx";

const address = [
  {
    place: "Calicut",
    location: (
      <>
        Red Crescent Hospital Compound, Feroke, Chungam Road
        <br />
        Ramanattukara
        <br />
        Kerala - 673631
      </>
    ),
    phno: "+91 99479 93382",
  },
  {
    place: "Dubai",
    location: (
      <>
        Room 150 - Block 2A - 2 Al Marifa Street,
        <br />
        Dubai Knowledge Park
        <br />
        Dubai
        United Arab Emirates
      </>
    ),
    phno: "+971561684642",
  },
];

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "white" }}>
      {/* Heading */}
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: 3,
            marginBottom: 0,
            color: "#1e4472",
            textDecoration: "underline",
          }}
        >
          Contact Address
        </Typography>
      </Box>

      {/* Address Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: { xs: 4, md: 25 },
          mt: 10,
          flexWrap: "wrap",
          border: "2px solid #129A6A",
          borderRadius: 15,
          width: { xs: "calc(100% - 32px)", md: 1000 },
          minHeight: 400,
          height: "auto",
          margin: "0 auto",
          p: { xs: 3, md: 0 },
          bgcolor: "white",
        }}
      >
        {address.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: 300 },
                marginTop: { xs: 2, md: 10 },
                marginLeft: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Place Name */}
              <Typography
                sx={{
                  marginRight: 2,
                  fontSize: 30,
                  color: "#129A6A",
                }}
              >
                {item.place}
              </Typography>

              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "#1e4472",
                    mt: 0.3,
                  }}
                />

                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.location}
                </Typography>
              </Box>

              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PhoneIcon
                  sx={{
                    color: "#1e4472",
                  }}
                />

                <Typography>{item.phno}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Map Heading */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mt: 10,
            color: "#1e4472",
            marginBottom: 0,
            textDecoration: "underline",
          }}
        >
          Location
        </Typography>

        {/* Map */}
        <Map />
      </Box>
    </Box>
  );
}
