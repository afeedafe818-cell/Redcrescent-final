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
        Kozhikode
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
        <br />
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
            marginRight: 9,
            marginBottom: -5,
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
          gap: 25,
          mt: 10,
          flexWrap: "wrap",
          border: "2px solid #129A6A",
          borderRadius: 15,
          width: 1000,
          height: 400,
          marginLeft: 30,
          bgcolor: "white",
        }}
      >
        {address.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: 300,
                marginTop: 10,
                marginLeft: 5,
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
            marginLeft: -10,
            color: "#1e4472",
            marginBottom: -10,
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
