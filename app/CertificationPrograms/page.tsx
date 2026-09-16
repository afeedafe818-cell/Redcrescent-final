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
    image: "Certification/english.webp",
    title: "Certified English Trainer",
    description:
      "A practical teaching certification designed to equip educators with advanced instructional techniques, language pedagogy, classroom delivery skills, and professional English coaching methods.",
  },
  {
    image: "Certification/AI.jpg",
    title: "Foundation Certificate in Artificial Intelligence (AI)",
    description:
      "An introductory tech program focused on fundamental AI concepts, machine learning principles, practical prompt engineering, and the real-world applications of smart technologies.",
  },
  {
    image: "Certification/proficiency.jpg",
    title: "English Proficiency Certificate",
    description:
      "A foundational language program designed to build core capabilities in English grammar, professional business writing, conversational fluency, and workplace communication skills.",
  },
  {
    image: "Certification/health.jpg",
    title: "Certificate in Health and Social Care",
    description:
      "An applied healthcare program that provides essential knowledge in patient care assistance, community health support, ethical caregiving practices, and fundamental health safety procedures.",
  },
  {
    image: "Certification/hr.jpg",
    title: "Certified Human Resource Manager",
    description:
      "A professional management certification designed to equip HR practitioners with essential skills in strategic recruitment, talent retention strategies, workplace compliance, and performance management.",
  },
  {
    image: "Certification/project.jpg",
    title: "Certified Project Management Professional",
    description:
      "A practical leadership certification designed to equip professionals with essential skills in project planning, resource scheduling, risk mitigation strategies, and end-to-end execution.",
  },
  {
    image: "Certification/cpp.png",
    title: "Certified Procurement Professional",
    description:
      "A specialized business certification focused on core capabilities in strategic sourcing, vendor relationship management, contract negotiation, and global supply chain optimization.",
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

export default function CertificationPrograms() {
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
