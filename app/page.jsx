"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
  }, []);

  return (
    <>
      <h1>Welcome to the Homepage</h1>
    </>
  );
};
export default HomePage;
