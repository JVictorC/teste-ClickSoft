import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useDataUser from 'src/hooks/useDataUser';

export default function DetailsUser() {
  const { dataUser } = useDataUser();
  const route = useRouter();

  useEffect(() => {
    if(!dataUser) {
      route.push('/')
    }
  }, [dataUser, route])

  return (
    <div>
      <h1>Details User</h1>
      <h1>nome: {dataUser?.name}</h1>
    </div>
  );
}
