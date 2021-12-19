import React from 'react';
import useDataUser from 'src/hooks/useDataUser';
import Image from 'next/image';
import { DataUserStyled } from './styledDataUser';
import { useRouter } from 'next/router';

export default function DataUser() {
  const { dataUser } = useDataUser();
  const router = useRouter();
  return (
    <DataUserStyled
      onClick={() =>
        router.push(`/detailsUsers/${dataUser.login}`)
      }
    >
      <Image
        src={dataUser.avatar_url}
        height={250}
        width={250}
        alt={`Image do usuário ${dataUser.login}`}
      />
      <article>
        <h1>{dataUser.name}</h1>
        <h1>{dataUser.location}</h1>
        <h1>{dataUser.login}</h1>
      </article>
    </DataUserStyled>
  );
}
