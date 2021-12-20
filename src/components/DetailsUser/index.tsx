/* eslint-disable @next/next/no-img-element */

import { respoUserGitHub } from '@models/dataRepos';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useDataUser from 'src/hooks/useDataUser';
import getReposByName from 'src/services/getResposByName';
import {
  DetailsUserStyled,
  DataUserStyled,
  RepositoryList,
  ListRepositories,
  Repository,
} from './detailsUserStyled';
import { AiFillGithub } from 'react-icons/ai';

export default function DetailsUser() {
  const { dataUser, getUserData } = useDataUser();
  const [repos, setRepos] = useState<respoUserGitHub[]>([]);
  const route = useRouter();

  useEffect(() => {
    const name = route.query.loginUser as string;
    if (name) {
      getUserData(name);
    }
    if (!dataUser) {
      route.push('/');
    }
    getReposByName(route.query.loginUser as string).then((repositórios) => {
      setRepos(repositórios);
    });
  }, []);

  return (
    <DetailsUserStyled>
      <h1 className="title">Details User</h1>

      <DataUserStyled>
        <article>
          <img
            src={dataUser?.avatar_url}
            width={100}
            height={100}
            alt={`Imagem do usuário ${dataUser?.name}`}
          />
        </article>
        <article>
          <p>Nome: {dataUser?.name}</p>
          <p>Região: {dataUser?.location}</p>
          <p>Bio: {dataUser?.bio}</p>
          <p>Company: {dataUser?.company}</p>
        </article>
      </DataUserStyled>

      <RepositoryList>
        <h2 className="title">
          {repos.length} Repositórios Encontrados do usuário
        </h2>
        <ListRepositories>
          {repos.map((repo) => (
            <Repository key={repo.id}>
              <h3>Nome: {repo.name}</h3>
              <p>Visibilidade: {repo.visibility}</p>
              {repo.description && <p>Descrição: {repo.description}</p>}
              <p>Branch Principal: {repo.default_branch}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Visualizar Repositório no GitHub <AiFillGithub />
              </a>
            </Repository>
          ))}
        </ListRepositories>
      </RepositoryList>
    </DetailsUserStyled>
  );
}
