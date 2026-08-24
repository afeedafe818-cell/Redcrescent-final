import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const imgs = [
  {
    img: "https://img.magnific.com/premium-vector/teacher-cute-worker-work-job-profession-professional-occupation-cartoon-character_598925-9055.jpg?semt=ais_hybrid&w=740&q=80",
    title: " Qualified trainers",
    dec: " We have well qualified trainers who can  guide you on every aspect of the course",
  },
  {
    img: "https://images.openai.com/static-rsc-4/T4nOaH_icACnI5v95eBYMQwD-yP1FKnMmNtFp0kOLyFx-mVGQdAMtPcHNlEufKmItbRyL0mMIAtnfANmjeSyvVO96zBU6GzinFloM-kyhrx_PjS0rfpJRPCOvXPv9aGUN2H8jVwTFNhIjZvhU4qIUvCo1NDQyQQK5hFmmi_ML_KiRqEus-mZz6QSWpdR9bqo?purpose=fullsize",
    title: "Numerous course categories",
    dec: "Choose from a wide variety of course categories and trainers, and numerous certifcations",
  },
  {
    img: "https://images.openai.com/static-rsc-4/cXbgGL2NrsX5JJMKrBb6V-wMDRbGlFkz85RtKPUdY7PTmZPFJMGb9lheZ-ZWz_2Mi6ci69rv-tlZehcbdFIVbkqyI5MLXiDgDLV5ndGI86SxaQqMvMIfGW-pLKfyMvOuA4HhjPrwAHnrpPOtH57PMpc29oiy5uHNy754SjbJaMGsdEvI-0YbJRXyFCm139kr?purpose=fullsize",
    title: "Global Certification",
    dec: "Our courses are world renowned, globally certified and help you achieve credibility around the world",
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        border: "1px solid white",
        margin: 5,
      }}
    >
      {imgs.map((image, index) => (
        <Box key={index} sx={{ textAlign: "center", maxWidth: 350 }}>
          <Box
            component="img"
            src={image.img}
            alt={image.title}
            sx={{
              width: 90,
              border: "3px solid",
              borderRadius: "40px",
              p: "5px",
            }}
          />
          <Typography variant="h6" sx={{ mt: 1 }}>
            {image.title}
          </Typography>
          <Typography variant="body2">{image.dec}</Typography>
        </Box>
      ))}
    </Box>
  );
}
