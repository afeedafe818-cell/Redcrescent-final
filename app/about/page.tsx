import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function About() {
  return (
    <div className="overflow-hidden">
      <Box className="mx-auto w-full max-w-4xl px-4 sm:px-8">
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
          component={Image}
          src="/Images/head1.jpeg"
          alt="Red Crescent campus"
          width={900}
          height={400}
          sizes="(max-width: 1024px) 100vw, 768px"
          className="mx-auto mt-7 h-64 w-full max-w-2xl rounded-xl object-cover sm:h-80"
        />

        <Box
          className="mt-8 grid grid-cols-1 gap-8 bg-[#FFF8F0] px-4 py-10 sm:px-10 lg:grid-cols-2"
          sx={{ display: "grid" }}
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
