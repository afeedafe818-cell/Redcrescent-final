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
    image: "Masters/master-hospital-administration.webp",
    title: "Master of Hospital Administration (MHA)",
    description:
      "A professional postgraduate degree designed to train future healthcare leaders in hospital operations, financial planning, quality control, and health law to ensure efficient medical facility management.",
  },
  {
    image: "Masters/microbiology.webp",
    title: "Masters in Microbiology",
    description:
      "An advanced scientific program focused on the study of pathogenic microorganisms, immunology, molecular genetics, and industrial applications across pharmaceuticals, clinical diagnostics, and food safety.",
  },
  {
    image: "Masters/radiology.jpg",
    title: "Masters in Radiology & Medical Imaging Technology",
    description:
      "A specialized clinical program providing expert technical and supervisory knowledge in operating advanced diagnostic equipment like MRI, CT scans, ultrasound, and nuclear medicine systems.",
  },
  {
    image: "Masters/operation.jpg",
    title: "Masters in Operation Theatre Technology (OTT)",
    description:
      "A high-level allied health degree that trains specialists to manage complex surgical environments, maintain sterile fields, and operate advanced intraoperative and life-support equipment.",
  },
  {
    image: "Masters/mba.jpg",
    title: "General MBA",
    description:
      "A comprehensive, cross-functional business program designed to build core leadership skills in strategy, finance, marketing, and human resources for diverse corporate industries.",
  },
  {
    image: "Masters/mba-ops.webp",
    title: "MBA in Operations Management",
    description:
      "A practical business management degree focused on optimizing supply chains, streamlining production workflows, implementing Lean Six Sigma principles, and improving organizational productivity.",
  },
  {
    image: "Masters/mba-market.jpg",
    title: "MBA in Marketing",
    description:
      "A dynamic degree centered on consumer behavior, brand management, digital marketing strategies, and market research to drive customer acquisition and revenue growth.",
  },
  {
    image: "Masters/mba-project.avif",
    title: "MBA in Project Management",
    description:
      "An industry-aligned management program teaching frameworks like Agile and Scrum to guide complex projects through scope, budget, schedule, and risk management from inception to close.",
  },
  {
    image: "Masters/mba-business.jpg",
    title: "MBA in International Business",
    description:
      "A globally focused management degree that equips leaders to navigate foreign exchange markets, international trade laws, cross-cultural teams, and multinational operations.",
  },
  {
    image: "Masters/mba-entrepreneur.avif",
    title: "MBA in Marketing & Entrepreneurship",
    description:
      "An innovation-driven program combining disruptive marketing tactics with startup mechanics, venture capital financing, and product-market expansion for new venture creation",
  },
  {
    image: "Masters/msw.webp",
    title: "Master of Social Work (MSW)",
    description:
      "A practical human services degree training leaders for community organizing, psychiatric social work, policy advocacy, and non-profit governance to create positive social change.",
  },
  {
    image: "Masters/fitness.jpg",
    title: "Master's in Physical Fitness Training",
    description:
      "A specialized sports science degree focused on advanced exercise physiology, biomechanics, athletic conditioning, and injury rehabilitation to optimize elite human performance.",
  },
  {
    image: "Masters/phyco.jpg",
    title: "Masters in Psychology",
    description:
      "An advanced study of human behavior, cognitive processes, and emotional dynamics, preparing professionals for clinical assessments, counseling, organizational consulting, and psychological research.",
  },
  {
    image: "Masters/hr.webp",
    title: "MBA in Human Resource Management",
    description:
      "A strategic management program that prepares professionals to drive workplace culture, talent acquisition, performance evaluations, labor compliance, and employee development.",
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

export default function Masters() {
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
              maxWidth: 450,
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
              sx={{ height: 350 }}
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
