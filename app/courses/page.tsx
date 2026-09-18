"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Hero from "../Components/Hero";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useRouter } from "next/navigation";
import CourseCardImage from "../Components/CourseCardImage";

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
    image: "Masters/phyco.jpg",
    title: "Masters in Psychology",
    description:
      "An advanced study of human behavior, cognitive processes, and emotional dynamics, preparing professionals for clinical assessments, counseling, organizational consulting, and psychological research.",
  },
  {
    image: "Postgraduate/Ai.jpg",
    title: "PG Diploma in Digital Marketing (AI Integrated)",
    description:
      "An advanced marketing program designed to equip professionals with cutting-edge skills in AI-powered campaign strategies, search engine optimization, programmatic advertising, data analytics, and automated content generation",
  },
  {
    image: "Bachelors/pych.jpg",
    title: "Bachelor in Psychology",
    description:
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments",
  },
  {
    image: "Diploma/administration.jpg",
    title: "Diploma in Hospital Administration",
    description:
      "A foundational healthcare program designed to equip students with practical skills in medical facility operations, patient services administration, front-office management, and hospital workflow coordination.",
  },
  {
    image: "Skill/biomedical.jpg",
    title: "Biomedical Maintenance Management",
    description:
      "A practical technical program designed to equip technicians with essential skills in diagnostic equipment calibration, preventive maintenance schedules, medical device troubleshooting, and safety compliance.",
  },
  {
    image: "Certification/english.webp",
    title: "Certified English Trainer",
    description:
      "A practical teaching certification designed to equip educators with advanced instructional techniques, language pedagogy, classroom delivery skills, and professional English coaching methods.",
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

export default function Courses() {
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
            <CourseCardImage src={course.image} alt={course.title} />
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
