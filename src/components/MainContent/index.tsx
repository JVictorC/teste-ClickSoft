import React from 'react';
import Image from 'next/image';
import icon from '../../../public/icon_home_page.svg';
import { InitialPreview, MainContentStyled } from './styledMainContent';
import useDataUser from 'src/hooks/useDataUser';
import Loading from '@components/Loading';
import { AiFillGithub } from 'react-icons/ai';
import DataUser from '@components/DataUser';

export default function MainContent() {
  const { dataUser, isLoading } = useDataUser();

  function mainImage() {
    return (
        <InitialPreview>
          <Image src={icon} alt="bem vindo ao site HUB" />
          <p>
            Faça uma busca pelo nome do Usuario do GitHub
            <AiFillGithub className="icon-github" />
          </p>
        </InitialPreview>
    );
  }

  function mainContent () {
    return (
      !dataUser ? mainImage(): (
        <DataUser />
      )
    )
  }

  return (
    <MainContentStyled>{isLoading ? Loading() : mainContent()}</MainContentStyled>
  );
}
