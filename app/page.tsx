"use client";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import TestimonialsSection from "./Components/TestimonialsSection";
import CoursesSection from "./Components/CoursesSection";
import Groupphoto from "./Components/Groupphoto";
export default function Home() {
  return (
    <div>
      <Hero />
      <Grid />
      <TestimonialsSection />
      <CoursesSection />
      <Groupphoto />
    </div>
  );
}
