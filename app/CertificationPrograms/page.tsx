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
  {
    label: "Certification Programs",
    path: "/CertificationPrograms",
  },
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

        boxSizing: "border-box",

        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.10)",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
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
          minHeight: 260,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* CONTENT */}
      <CardContent
        sx={{
          p: 3,
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {/* TITLE */}
        <Typography
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 1.3,

            height: 52,
            minHeight: 52,

            mb: 2,

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: 15,
            lineHeight: 1.6,

            height: 120,
            minHeight: 120,

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
          px: 3,
          pb: 3,
          pt: 0,
          mt: "auto",
          flexShrink: 0,
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

            border: "1px solid #129A6A",

            transition: "all 0.3s ease",

            "&:hover": {
              bgcolor: "white",
              color: "#129A6A",
            },
          }}
        >
          Know More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function CertificationPrograms() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFF8F0",
      }}
    >
      <Hero />

      {/* CATEGORY DROPDOWN */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 6,
          px: 2,
        }}
      >
        <Autocomplete
          disablePortal
          options={category}
          sx={{
            width: {
              xs: "100%",
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
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
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