export default interface responseApiRespoUserGitHub {
  data?: respoUserGitHub[];
  status: number;
}

export interface respoUserGitHub {
  url: string;
  visibility: string;
  id: number;
  description: string;
  default_branch: string;
}