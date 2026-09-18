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
    image: "Bachelors/labtech.webp",
    title: "Bachelor in Medical Laboratory Technology",
    description:
      "A hands-on clinical science program that trains students in diagnostic pathology, hematology, and clinical biochemistry to accurately process medical specimens for patient diagnosis.",
  },
  {
    image: "Bachelors/radio.jpg",
    title: "Bachelors in Radiology and Medical Imaging Technology",
    description:
      "An allied health degree focused on the operating principles of diagnostic imaging equipment, including X-rays, CT scans, MRIs, and ultrasound systems for medical evaluations.",
  },
  {
    image: "Bachelors/ot.jpg",
    title: "Bachelor in Operation Theatre Technology",
    description:
      "A practical medical program that prepares professionals to set up surgical suites, sterilize high-tech equipment, and assist surgical teams during complex operative procedures",
  },
  {
    image: "Bachelors/bha.jpg",
    title: "Bachelor in Hospital Administration",
    description:
      "A specialized healthcare management degree equipping students with foundational skills in facility operations, medical records administration, patient care, and health services.",
  },
  {
    image: "Bachelors/technology.jpg",
    title: "Bachelor in Dialysis Technology",
    description:
      "A focused clinical program training specialists to operate, calibrate, and maintain hemodialysis machinery while continuously monitoring patients undergoing renal treatments.",
  },
  {
    image: "Bachelors/CSSD.jpg",
    title: "Bachelor in Central Sterile Supply Department (CSSD) Technology",
    description:
      "A specialized infection control degree focused on the decontamination, sterilization, quality control, and distribution of medical instruments across clinical environments.",
  },
  {
    image: "Bachelors/bba.jpg",
    title: "Bachelor of Business Administration (BBA)",
    description:
      "A foundational management degree providing comprehensive exposure to essential corporate practices, including financial accounting, team leadership, and marketing strategy.",
  },
  {
    image: "Bachelors/entre.webp",
    title: "Bachelor in Marketing & Entrepreneurship",
    description:
      "An action-oriented business program teaching dynamic growth marketing, startup venture creation, product validation, and digital customer acquisition strategies.",
  },
  {
    image: "Bachelors/public.jpg",
    title: "Bachelor in Public Administration",
    description:
      "A public policy degree exploring government administrative structures, public sector economics, policy development, and community governance for public service careers.",
  },
  {
    image: "Bachelors/social.jpg",
    title: "Bachelor in Social Work",
    description:
      "An applied social science degree combining theoretical coursework and field training to prepare students for community outreach, NGO administration, and social welfare.",
  },
  {
    image: "Bachelors/pych.jpg",
    title: "Bachelor in Psychology",
    description:
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments",
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

export default function Bachelors() {
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
