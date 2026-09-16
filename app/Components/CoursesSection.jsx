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
      "An introductory study of human mind and behavior, covering cognitive processes, developmental theories, personality structures, and foundational psychological assessments",
  },
  {
    image: "Diploma/hr.jpg",
    title: "Diploma in Human Resource Management",
    description:
      "A practical business program that builds core capabilities in corporate recruitment strategies, workforce scheduling, employee relations, payroll support, and workplace performance management",
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

export default function CourseSection() {
  return (
    <Box className="grid grid-cols-1 gap-6 bg-[#FFF8F0] p-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card
          key={course.title}
          className="flex w-full flex-col"
          sx={{
            maxWidth: 400,
            height: "100%",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            className="hover-zoom-media h-56 object-cover sm:h-64"
            image={course.image}
            title={course.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography className="consistent-heading" gutterBottom component="div">
              {course.title}
            </Typography>
            <Typography className="consistent-body" sx={{ color: "text.secondary" }}>
              {course.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={buttonSx}>Know More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
