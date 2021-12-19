import { dataUserGitHub } from '@models/dataUser';
import React, { createContext, useEffect, useState } from 'react';


interface HistoryUsersCtx {
  historyUsers?: dataUserGitHub[];
  setNewUserInHistory?: (newUser: dataUserGitHub) => void;
}


const contextHistorySearchUsersProps = createContext<HistoryUsersCtx>({});

const { Provider } = contextHistorySearchUsersProps;

interface HistorySearchUsersProps {
  children: React.ReactNode;
}

interface dataUserGitHubLocal extends dataUserGitHub{
  qty: number;
}

function padronizarObj (obj: dataUserGitHub) {
  const dataLocal = JSON.parse(localStorage.getItem('historyUsers')) as dataUserGitHubLocal[];

  if(!dataLocal) {
    return {
      qty: 1,
      ... obj
    }
  }

  const sameDataInLocal = dataLocal.filter((userLocal) => userLocal.id === obj.id)[0];

  if(sameDataInLocal) {
    console.log('a');
    const teste = {
      qty: sameDataInLocal.qty += 1,
      ...sameDataInLocal
    }
    console.log(teste);
  }

  return {
    qty: 1,
    ... obj
  }
  

}

export function HistorySearchUsers(props: HistorySearchUsersProps) {
  const [historyUsers, setHistoryUsers] = useState<dataUserGitHub[]>([]);

  function setNewUserInHistory(newUser: dataUserGitHub) {
    try {
      const localHistory = JSON.parse(localStorage.getItem('historyUsers'));
      localHistory.push(newUser);
      localStorage.setItem('historyUsers', JSON.stringify(localHistory));
      setHistoryUsers(prevState => [...prevState, newUser])
    } catch (error) {
      localStorage.setItem('historyUsers', JSON.stringify([newUser]));
      setHistoryUsers(prevState => [...prevState, newUser])
    }
  }

  function getDataInLocal() {
    const localHistory = JSON.parse(localStorage.getItem('historyUsers'));
    setHistoryUsers(localHistory || []);
  }

  useEffect(() => {
    getDataInLocal();
  }, []);

  const valueProvider: HistoryUsersCtx = {
    historyUsers,
    setNewUserInHistory
  };

  return <Provider value={valueProvider}>{props.children}</Provider>;
}

export default contextHistorySearchUsersProps;
