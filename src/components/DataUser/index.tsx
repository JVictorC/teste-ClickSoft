import React from 'react';
import useDataUser from 'src/hooks/useDataUser';
import Image from 'next/image';

export default function DataUser() {
  const { dataUser } = useDataUser();

  return (
    <div>
      <Image
        src={dataUser.avatar_url}
        height={50}
        width={50}
        alt={`Image do usuario ${dataUser.login}`}
      />
      <h1>{dataUser.name}</h1>
      <h4>{dataUser.login}</h4>
      <h6>{dataUser.location}</h6>
    </div>
  );
}