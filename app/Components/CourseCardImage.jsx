import Box from "@mui/material/Box";
import Image from "next/image";

export default function CourseCardImage({ src, alt, className = "" }) {
  return (
    <Box className={`relative h-[300px] ${className}`}>
      <Image
        src={`/${src.replace(/^\//, "")}`}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </Box>
  );
}
