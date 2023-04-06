async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/markpackham/repos"
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return <div>{repos[0].name}</div>;
};
export default ReposPage;