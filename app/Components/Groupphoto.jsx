import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const itemData = [
  {
    id: 1,
    img: "/Images/stages.jpg",
    title: "Students at a campus event",
  },
  {
    id: 2,
    img: "/Images/twostud.jpeg",
    title: "Kitchen",
  },
  {
    id: 3,
    img: "/Images/head2.jpeg",
    title: "Sink",
  },
  {
    id: 4,
    img: "/Images/head3.jpeg",
    title: "Books",
  },
  {
    id: 5,
    img: "/Images/Teacher.jpeg",
    title: "Bed",
  },
  {
    id: 6,
        img: "/Images/stage.jpg",
    title: "Kitchen",
  },
  {
    id: 7,
        img: "/Images/students.jpg",
    title: "Sink",
  },
  {
    id: 8,
        img: "/Images/head1.jpeg",
    title: "Books",
  },
];

export default function Gropuphoto() {
  return (
    <Box className="px-4 py-8 sm:px-8">
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#129A6A",
        }}
      >
        A Wholesome Campus Life
      </Typography>
      <Box
        className="mt-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4"
        sx={{ display: "grid" }}
      >
        {itemData.map((i) => (
          <Box key={i.id} className="relative h-48 w-full max-w-[300px]">
            {i.img.startsWith("/") ? (
              <Image
                src={i.img}
                alt={i.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="hover-zoom-image rounded-lg object-cover"
              />
            ) : (
              <Box
                component="img"
                src={i.img}
                alt={i.title}
                loading="lazy"
                className="hover-zoom-image h-full w-full rounded-lg object-cover"
              />
            )}
          </Box>
        ))}
      </Box>
      <Box
        className="mt-8 flex justify-center"
      >
        <Button
          sx={{
            fontSize: 15,
            border: "1px solid green",
            borderRadius: "20px",
            backgroundColor: "#129A6A",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "white",
              color: "#129A6A",
            },
          }}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
}
