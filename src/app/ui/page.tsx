"use client";
import React, { useState } from "react";
import NavLinks from "@/components/NavLinks";
import CourseCarousel from "@/components/CourseCarousel";
import { courses } from "@/data/courses";

const HomePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Bienvenidos a Cursos YEIIDH
      </h1>
      <p className="mb-6 text-center">
        Explora nuestros cursos para aprender HTML, CSS, JavaScript y más.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Proyectos Destacados
        </h2>
        <CourseCarousel images={selectedCourse.images} />
      </div>
      <NavLinks />
    </div>
  );
};

export default HomePage;
