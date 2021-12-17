import axios from "axios";

export default async function getDataGitHubByName(name: string) {
  const dataUser = await axios.get(`https://api.github.com/users/${name}/repos`);
  return dataUser.data;
}