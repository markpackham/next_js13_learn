import Link from "next/link";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Homepage</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      <br />
      <Courses />
    </>
  );
};
export default HomePage;
