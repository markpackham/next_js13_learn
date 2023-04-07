"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <h1>Welcome to the Homepage</h1>
    </>
  );
};
export default HomePage;
