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
    image: "Skill/biomedical.jpg",
    title: "Biomedical Maintenance Management",
    description:
      "A practical technical program designed to equip technicians with essential skills in diagnostic equipment calibration, preventive maintenance schedules, medical device troubleshooting, and safety compliance.",
  },
  {
    image: "Skill/gas.jpg",
    title: "Medical Gas Management",
    description:
      "A specialized healthcare safety program focused on fundamental operational principles of medical gas pipeline systems, manifold controls, emergency supply protocols, and facility gas safety standards.",
  },
  {
    image: "Skill/ms.jpg",
    title: "MS Office Professional Skills",
    description:
      "An essential administrative program built to develop practical proficiency in Microsoft Word documentation, Excel data analysis, PowerPoint presentation design, and professional Outlook email management.",
  },
  {
    image: "Skill/aid.jpg",
    title: "Basic Life Support (BLS) & First Aid",
    description:
      "A practical emergency response program designed to equip individuals with essential skills in CPR execution, automated external defibrillator (AED) operation, trauma first aid, and life-saving intervention.",
  },
  {
    image: "Skill/pro.jpg",
    title: "Advanced Business Communication & Interview Skills",
    description:
      "An interactive career-readiness program focused on professional verbal articulation, business writing, persuasive presentation delivery, resume optimization, and high-impact interview techniques.",
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

export default function Skillcourses() {
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