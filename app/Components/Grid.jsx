import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Grid() {
  const Readmore = () => {
    navigate("/about");
  };

  return (
    <Box className="flex flex-col items-center gap-8 bg-[#FFF8F0] p-6 sm:p-10 lg:flex-row lg:justify-between lg:p-16">
      <Box className="w-full lg:w-1/2" sx={{ marginRight: "10px" }}>
        <Typography variant="h6" sx={{ marginLeft: "20px", color: "#129A6A" }}>
          QUALITY EDUCATION FOR ALL
        </Typography>
        <Typography variant="h4" sx={{ marginLeft: "20px" }}>
          Professional Courses in <br /> Calicut,Kerala
        </Typography>
        <Typography sx={{ marginLeft: "20px" }}>
          Welcome to Red Crescent Medical Institute, a trusted medical education
          institute
          <br /> with a strong history of 10 years of Excellence in
          healthcare education
          <br /> and training. Over the past decade, we have been committed to
          providing quality education and creating a supportive environment for
          students aspiring to build
          <br /> successful careers in the medical and healthcare field.
          <br />
          <br /> With experienced faculty, dedicated staff, and strong and
          efficient management,
          <br /> we focus on maintaining high academic standards and providing
          students
          <br /> with the knowledge, skills, and professional values they need.
          Our student-centered approach ensures a positive learning experience
          while preparing students for their future responsibilities as
          healthcare professionals. At Red Crescent Medical Institute,
          <br /> we continue to strive for excellence, professionalism, and
          quality in medical education.
          <br />
        </Typography>
        <Button
          sx={{
            fontSize: 20,
            border: "1px solid green",
            borderRadius: "20px",
            backgroundColor: "#129A6A",
            color: "white",
            transition: "all 0.3s ease",
            margin: "10px",
            marginLeft: "30px",
            "&:hover": {
              bgcolor: "white",
              color: "#129A6A",
            },
          }}
          onClick={Readmore}
        >
          ReadMore
        </Button>
      </Box>
      <Box
        component="img"
        src="/Images/twostud.jpeg"
        alt="Students on campus"
        className="hover-zoom-image h-auto max-h-150 w-full object-contain sm:h-auto lg:w-1/2 FFFFFFsm-2px"
        sx={{ borderRadius: "20px", marginRight: "10px" }}
      />
    </Box>
  );
}