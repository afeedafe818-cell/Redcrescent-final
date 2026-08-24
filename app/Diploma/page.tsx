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
      "A practical medical program that prepares professionals to set up surgical suites, sterilize high-tech equipment, and assist surgical teams during complex operative procedures.",
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
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments.",
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

export default function Bachelors() {
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