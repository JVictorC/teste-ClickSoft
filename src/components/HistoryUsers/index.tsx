/* eslint-disable @next/next/no-img-element */
import {
  DataUserStyled,
  ListUsersHistory,
} from '@components/HistoryUsers/HistoryUsersStyled';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineClear, AiOutlineClose } from 'react-icons/ai';
import useHistoryUser from 'src/hooks/useHistoryUsers';
import { HistoryUsersStyled } from './HistoryUsersStyled';

export default function HistoryUsers() {
  const { historyUsers, removeAItemInLocal, clearHistory } = useHistoryUser();
  const router = useRouter();

  return (
    <HistoryUsersStyled>
      <button className="clear-history" onClick={clearHistory}>
        <AiOutlineClear />
        Limpar Histórico
      </button>
      <h1 className="title">Histórico de Busca de Usuários</h1>

      <h3 className="subTitle">
        {historyUsers.length} Usuários Pesquisados Recentemente
      </h3>
      <ListUsersHistory>
        {historyUsers.map((user) => (
          <DataUserStyled
            key={user?.id}
            onClick={() => router.push(`/detailsUsers/${user?.login}`)}
          >
            <AiOutlineClose
              className="excluir"
              onClick={() => removeAItemInLocal(user?.idLocal)}
            />
            <article>
              <img
                src={user?.avatar_url}
                width={100}
                height={100}
                alt={`Imagem do usuário ${user?.name}`}
              />
            </article>
            <article>
              <p>Nome: {user?.name}</p>
              <p>Região: {user?.location}</p>
              <p>Company: {user?.company}</p>
            </article>
          </DataUserStyled>
        ))}
      </ListUsersHistory>
    </HistoryUsersStyled>
  );
}
