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
      "An innovation-driven program combining disruptive marketing tactics with startup mechanics, venture capital financing, and product-market expansion for new venture creation.",
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

export default function Masters() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFF8F0",
      }}
    >
      <Hero />

      {/* CATEGORY */}
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