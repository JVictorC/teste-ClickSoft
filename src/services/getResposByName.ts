import { respoUserGitHub } from '@models/dataRepos';
import axios from 'axios';

export default async function getReposByName(name: string) {
  const dataUser = await axios.get<respoUserGitHub[]>(
    `https://api.github.com/users/${name}/repos`
  );
  return dataUser.data;
}
