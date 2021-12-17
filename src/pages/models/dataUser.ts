export default interface responseApiDataUserGitHub {
  data?: dataUserGitHub;
  status?: number;
}

export interface dataUserGitHub {
  avatar_url: string;
  bio: string;
  company: string;
  id: number;
  location: string;
  login: string;
  name: string;
  public_repos: number;
  url: string
}