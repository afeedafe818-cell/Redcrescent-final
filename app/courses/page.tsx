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
    image: "Masters/phyco.jpg",
    title: "Masters in Psychology",
    description:
      "An advanced study of human behavior, cognitive processes, and emotional dynamics, preparing professionals for clinical assessments, counseling, organizational consulting, and psychological research.",
  },
  {
    image: "Postgraduate/Ai.jpg",
    title: "PG Diploma in Digital Marketing (AI Integrated)",
    description:
      "An advanced marketing program designed to equip professionals with cutting-edge skills in AI-powered campaign strategies, search engine optimization, programmatic advertising, data analytics, and automated content generation.",
  },
  {
    image: "Bachelors/pych.jpg",
    title: "Bachelor in Psychology",
    description:
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments.",
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

function CourseCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 560,

        display: "flex",
        flexDirection: "column",

        borderRadius: 3,
        overflow: "hidden",

        boxShadow: "0 4px 15px rgba(0,0,0,0.10)",

        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: 260,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* CONTENT */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 1.3,
            mb: 2,

            // Keeps title area consistent
            minHeight: 52,

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: 15,
            lineHeight: 1.6,

            // Keeps description area consistent
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* BUTTON */}
      <CardActions
        sx={{
          p: 3,
          pt: 0,
          mt: "auto",
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: 15,
            borderRadius: "20px",
            backgroundColor: "#129A6A",
            color: "white",
            px: 3,
            py: 1,

            textTransform: "none",

            transition: "all 0.3s ease",

            "&:hover": {
              bgcolor: "white",
              color: "#129A6A",
              border: "1px solid #129A6A",
            },
          }}
        >
          Know More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Courses() {
  const router = useRouter();

  return (
    <Box
      sx={{
        bgcolor: "#FFF8F0",
        minHeight: "100vh",
      }}
    >
      <Hero />

      {/* CATEGORY SELECT */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Autocomplete
          disablePortal
          options={category}
          sx={{
            width: {
              xs: "90%",
              sm: 350,
            },
          }}
          getOptionLabel={(option) => option.label}
          onChange={(event, value) => {
            if (value) {
              router.push(value.path);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Category"
            />
          )}
        />
      </Box>

      {/* COURSE GRID */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          pb: 10,

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },

          gap: 4,

          alignItems: "stretch",
        }}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </Box>
    </Box>
  );
}