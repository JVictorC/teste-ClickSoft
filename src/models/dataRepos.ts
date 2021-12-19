export default interface responseApiRespoUserGitHub {
  data?: respoUserGitHub[];
  status: number;
}

export interface respoUserGitHub {
  html_url: string;
  name: string;
  visibility: string;
  id: number;
  description: string;
  default_branch: string;
}