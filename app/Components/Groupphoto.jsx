import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const itemData = [
  {
    id: 1,
    img: "/Images/head1.jpeg",
    title: "Bed",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpMEQyycyeJ-QrW0bZx_dvWeLF9p907xvBfqYyLh_JQ&s=10",
    title: "Kitchen",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZCf5jTCS1I6txSGBlq1Stwp0P6ZaTsIwFB05Qq4fyw&s=10",
    title: "Sink",
  },
  {
    id: 8,
    img: "https://assets-us-01.kc-usercontent.com/99f113b4-e5f7-00d2-23c0-c83ca2e4cfa2/05181ceb-ba4a-4527-a0fe-81c8f0be8112/Romania-Ukraine-education-conflict-2022-UN0645387.jpg",
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
          <Box
            key={i.id}
            component="img"
            src={i.img}
            alt={i.title}
            className="hover-zoom-image h-48 w-full max-w-[300px] rounded-lg object-cover"
            sx={{ objectFit: "cover" }}
          />
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
