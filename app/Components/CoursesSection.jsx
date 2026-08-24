import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const courses = [
  {
    image: "Masters/phyco.jpg",
    title: "Masters in Psychology",
    description:
      "An advanced study of human behavior, cognitive processes, and emotional dynamics, preparing professionals for clinical assessments, counseling, organizational consulting, and psychological research.",
  },
  {
    image: "Bachelors/pych.jpg",
    title: "Bachelor in Psychology",
    description:
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments.",
  },
  {
    image: "Diploma/hr.jpg",
    title: "Diploma in Human Resource Management",
    description:
      "A practical business program that builds core capabilities in corporate recruitment strategies, workforce scheduling, employee relations, payroll support, and workplace performance management.",
  },
];

function CourseCard({
  image,
  title,
  description
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

export default function CourseSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFF8F0",
      }}
    >
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

          py: 5,
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