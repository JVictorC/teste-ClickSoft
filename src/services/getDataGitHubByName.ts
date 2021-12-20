import axios from 'axios';
import { dataUserGitHub } from '../models/dataUser';

export default async function getDataGitHubByName(name: string) {
  try {
    const dataUser = await axios.get<dataUserGitHub>(
      `https://api.github.com/users/${name || ''}`
    );
    return dataUser.data;
  } catch (error) {}
}
