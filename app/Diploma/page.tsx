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
    image: "Diploma/administration.jpg",
    title: "Diploma in Hospital Administration",
    description:
      "A foundational healthcare program designed to equip students with practical skills in medical facility operations, patient services administration, front-office management, and hospital workflow coordination.",
  },
  {
    image: "Diploma/hr.jpg",
    title: "Diploma in Human Resource Management",
    description:
      "A practical business program that builds core capabilities in corporate recruitment strategies, workforce scheduling, employee relations, payroll support, and workplace performance management",
  },
  {
    image: "Diploma/business.jpg",
    title: "Diploma in Business Management",
    description:
      "An introductory management program focused on fundamental business concepts, team supervision, customer relations management, basic financial accounting, and day-to-day business operations.",
  },
  {
    image: "Diploma/office.jpg",
    title: "Diploma in Office Administration",
    description:
      "A practical business program designed to equip students with essential skills in administrative support, business communication, record management, and day-to-day office workflow execution.",
  },
  {
    image: "Diploma/teacher.jpg",
    title: "Diploma in Education and Training",
    description:
      "A foundational teaching program that builds core capabilities in modern instructional methods, classroom management techniques, curriculum delivery, and learner assessment strategies.",
  },
  {
    image: "Diploma/nutri.jpg",
    title: "Diploma in Nutrition and Dietetics",
    description:
      "An applied health science program focused on fundamental nutritional principles, personal diet planning, community health wellness, and food service nutritional management.",
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

export default function Diploma() {
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
