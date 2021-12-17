import axios from 'axios';
import responseApiDataUserGitHub from '../models/dataUser';

export default async function getDataGitHubByName(name: string) {
  try {
    const dataUser = await axios.get<responseApiDataUserGitHub>(
      `https://api.github.com/users/${name}`
    );
    return dataUser.data;
  } catch (error) {
    return {
      data: {},
      status: 404,
    };
  }
}
