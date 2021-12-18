import React from 'react';
import useDataUser from 'src/hooks/useDataUser';
import Image from 'next/image';
import { DataUserStyled } from './styledDataUser';
import { useRouter } from 'next/router';

export default function DataUser() {
  const { dataUser } = useDataUser();
  const router = useRouter();
  return (
    <DataUserStyled onClick={() => router.push(`/detailsUsers/${dataUser.id}`)}>
      <Image
        src={dataUser.avatar_url}
        height={250}
        width={250}
        alt={`Image do usuario ${dataUser.login}`}
      />
      <article>
        <h1>Nome: {dataUser.name}</h1>
        <h5>Login: {dataUser.login}</h5>
        <h6>Região: {dataUser.location}</h6>
      </article>
    </DataUserStyled>
  );
}
