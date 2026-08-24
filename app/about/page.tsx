import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 30,
          width: 950,
        }}
      >
        <Box sx={{ mt: -2 }}>
          <Typography variant="h3" sx={{ mt: 10, mb: 3, fontWeight: "bold" }}>
            Our Story
          </Typography>

          <Typography sx={{ fontSize: 17 }}>
            At Red Crescent International, we are dedicated to providing
            high-quality medical education and training to our students. With a
            strong history of 10 years in medical education, we have
            continuously worked to create opportunities for students to develop
            the knowledge and skills they need to succeed in the healthcare
            field.
          </Typography>
          <Typography sx={{ fontSize: 17 }}>
            <br /> Our experienced and qualified faculty are passionate about
            teaching and committed to helping every student achieve their full
            potential. Supported by strong management and modern teaching
            methods, we provide an engaging and effective learning environment.
            Our journey continues with a commitment to excellence,
            professionalism, and student success.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: -200, paddingTop: 200 }}>
        <Box
          component="img"
          src="Images/head1.jpeg"
          width={650}
          sx={{
            display: "block",
            margin: "0 auto",
            borderRadius: 5,
            marginTop: 7,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            mt: -20,
            mb: -2,
            px: 20,
            py: 20,
            mr: 1,
            bgcolor: "#FFF8F0",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 35, marginTop: 10 }}>Vision</Typography>
            <Typography>
              Maintain the highest standards of practical and theoretical
              instruction across health sciences, management, and technology,
              while fostering innovation, academic excellence, ethical
              leadership, research, lifelong learning, and professional
              development to nurture skilled, competent, compassionate, and
              future-ready professionals who can address emerging challenges and
              contribute meaningfully to society at local, national, and global
              levels.{" "}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 35, marginTop: 10 }}>
              Mission
            </Typography>
            <Typography>
              To maintain the highest standards of practical and theoretical
              instruction across health sciences, management, and technology,
              fostering academic excellence, professional competence,
              innovation, research, ethical values, leadership, and lifelong
              learning. We are committed to providing a dynamic, inclusive, and
              industry-oriented learning environment that equips learners with
              the knowledge, skills, and practical experience necessary to meet
              emerging challenges and make meaningful contributions to society.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
