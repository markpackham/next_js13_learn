import Link from "next/link";

// If this was purely a Server component we would be doing the fetching in here
// Instead we want it as a Client component so the feteching is done on the homepage
// async function fetchCourses() {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = await response.json();
//   return courses;
// }

const Courses = ({ courses }) => {
  // const courses = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Courses;
