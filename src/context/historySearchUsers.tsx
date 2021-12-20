import { dataUserGitHub } from '@models/dataUser';
import React, { createContext, useEffect, useState } from 'react';
import useDataUser from 'src/hooks/useDataUser';

interface HistoryUsersCtx {
  historyUsers?: dataInLocal[];
  setNewUserInHistory?: (newUser: dataUserGitHub) => void;
  removeAItemInLocal?: (idForRemove: number) => void;
  clearHistory?: () => void;
}

const contextHistorySearchUsersProps = createContext<HistoryUsersCtx>({});

const { Provider } = contextHistorySearchUsersProps;

interface HistorySearchUsersProps {
  children: React.ReactNode;
}

interface dataInLocal extends dataUserGitHub {
  idLocal: number;
}

export function HistorySearchUsers(props: HistorySearchUsersProps) {
  const [historyUsers, setHistoryUsers] = useState<dataInLocal[]>([]);
  const { notFound } = useDataUser();

  function setNewUserInHistory(newUser: dataUserGitHub) {
    console.log(notFound);
    console.log('dasdas');
    if (!newUser) return;
    const newUserWithId = {
      idLocal: Math.floor(Math.random() * 100),
      ...newUser,
    };

    try {
      const localHistory = JSON.parse(
        localStorage.getItem('historyUsers')
      ) as dataInLocal[];

      if (localHistory.some((user) => user.id === newUserWithId.id)) return;

      localHistory.push(newUserWithId);
      
      localStorage.setItem('historyUsers', JSON.stringify(localHistory));
      setHistoryUsers((prevState) => [...prevState, newUserWithId]);
    } catch (error) {
      localStorage.setItem('historyUsers', JSON.stringify([newUserWithId]));
      setHistoryUsers((prevState) => [...prevState, newUserWithId]);
    }
  }

  function getDataInLocal() {
    const localHistory = JSON.parse(localStorage.getItem('historyUsers'));
    setHistoryUsers(localHistory || []);
  }

  function removeAItemInLocal(idForRemove: number) {
    const dataInLocal = JSON.parse(
      localStorage.getItem('historyUsers')
    ) as dataInLocal[];

    const dataFiltered = dataInLocal.filter(
      (user) => user.idLocal !== idForRemove
    );

    localStorage.setItem('historyUsers', JSON.stringify(dataFiltered));
    setHistoryUsers(dataFiltered);
  }

  function clearHistory() {
    setHistoryUsers([]);
    localStorage.removeItem('historyUsers');
  }

  useEffect(() => {
    getDataInLocal();
  }, []);

  const valueProvider: HistoryUsersCtx = {
    historyUsers,
    setNewUserInHistory,
    removeAItemInLocal,
    clearHistory,
  };

  return <Provider value={valueProvider}>{props.children}</Provider>;
}

export default contextHistorySearchUsersProps;
