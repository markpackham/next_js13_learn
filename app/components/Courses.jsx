async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const coruses = await fetchCourses();
  return <div>Courses</div>;
};
export default Courses;
