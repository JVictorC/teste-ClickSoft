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
