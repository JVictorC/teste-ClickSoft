import React from 'react';
import Image from 'next/image';
import icon from '../../../public/icon_home_page.svg';
import iconNotFound from '../../../public/not_found_user.svg';
import { InitialPreview, MainContentStyled } from './styledMainContent';
import useDataUser from 'src/hooks/useDataUser';
import Loading from '@components/Loading';
import { AiFillGithub } from 'react-icons/ai';
import { FaRegSadTear } from 'react-icons/fa';
import DataUser from '@components/DataUser';

export default function MainContent() {
  const { dataUser, isLoading, notFound } = useDataUser();

  function mainImage() {
    return (
      <InitialPreview>
        <Image src={icon} alt="bem vindo ao site HUB" />
        <p>
          Faça uma busca pelo nome do Usuário do GitHub
          <AiFillGithub className="icon-github" />
        </p>
      </InitialPreview>
    );
  }

  function NotFound() {
    return (
      <InitialPreview>
        <Image src={iconNotFound} alt="bem vindo ao site HUB"/>
        <p>
          Usuário Não Encontrado
          <FaRegSadTear className="icon-github" />
        </p>
      </InitialPreview>
    );
  }

  function mainContent() {
    return !dataUser && !notFound ? (
      mainImage()
    ) : notFound ? (
      NotFound()
    ) : (
      <DataUser />
    );
  }

  return (
    <MainContentStyled>
      {isLoading ? Loading() : mainContent()}
    </MainContentStyled>
  );
}
