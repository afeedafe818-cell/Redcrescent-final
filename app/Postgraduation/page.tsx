"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Hero from "../Components/Hero";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useRouter } from "next/navigation";

const category = [
  { label: "Masters", path: "/Masters" },
  { label: "Post Graduation Diploma", path: "/Postgraduation" },
  { label: "Bachelors", path: "/Bachelors" },
  { label: "Diploma", path: "/Diploma" },
  { label: "Skill Courses", path: "/Skillcourses" },
  { label: "Certification Programs", path: "/CertificationPrograms" },
];

const courses = [
  {
    image: "Postgraduate/healthcare.webp",
    title: "PG Diploma in Hospital Administration & Healthcare Management",
    description:
      "An intensive professional program designed to equip healthcare practitioners with essential skills in hospital operations, medical facility management, patient care quality, and health systems administration.",
  },
  {
    image: "Postgraduate/business.webp",
    title: "PG Diploma in Business Management",
    description:
      "A practical industry-focused program that builds fundamental capabilities in corporate business strategy, financial decision-making, organizational leadership, and operational management.",
  },
  {
    image: "Postgraduate/Ai.jpg",
    title: "PG Diploma in Digital Marketing (AI Integrated)",
    description:
      "An advanced marketing program designed to equip professionals with cutting-edge skills in AI-powered campaign strategies, search engine optimization, programmatic advertising, data analytics, and automated content generation",
  },
];

const buttonSx = {
  fontSize: 15,
  marginRight: 20,
  border: "1px solid green",
  borderRadius: "20px",
  backgroundColor: "#129A6A",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    bgcolor: "white",
    color: "#129A6A",
  },
};

export default function PostGraduation() {
  const router = useRouter();
  return (
    <Box className="course-page">
      <Hero />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          marginTop: 8,
        }}
      >
        <Autocomplete
          disablePortal
          options={category}
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.label}
          onChange={(event, value) => {
            if (value) {
              router.push(value.path);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label=" Select Catagory" />
          )}
        />
      </Box>
      <Box
        sx={{
          marginBottom: 10,
          bgcolor: "#FFF8F0",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
          p: 3,
        }}
      >
        {courses.map((course) => (
          <Card
            key={course.title}
            sx={{
              maxWidth: 400,
              width: "100%",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              sx={{ height: 300 }}
              image={course.image}
              title={course.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: 18 }}
              >
                {course.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {course.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={buttonSx}>Know More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
