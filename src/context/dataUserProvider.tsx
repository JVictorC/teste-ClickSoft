import notFound from '@models/notFound';
import React, { createContext, useState } from 'react';
import useHistoryUser from 'src/hooks/useHistoryUsers';
import { dataUserGitHub } from '../models/dataUser';
import getDataGitHubByName from '../services/getDataGitHubByName';

interface DataUserCtx {
  dataUser?: dataUserGitHub | notFound;
  isLoading?: boolean;
  getUserData?: (name: string) => void;
  notFound?: boolean
}

const DataUserContext = createContext<DataUserCtx>({});

export function DataUserProvider(props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<dataUserGitHub>();

  const { setNewUserInHistory } = useHistoryUser();

  async function getUserData(name: string) {
    setLoading(true);
    setNotFound(false);
    if(name === '') {
      setLoading(false);
      setDataUser(null);
      return;
    }
    try {
      const data = await getDataGitHubByName(name);
      setDataUser(data);
      setNewUserInHistory(data);
    } catch (e) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  const valueProvider: DataUserCtx = {
    dataUser,
    isLoading,
    getUserData,
    notFound
  };

  return (
    <DataUserContext.Provider value={valueProvider}>
      {props.children}
    </DataUserContext.Provider>
  );
}

export default DataUserContext;
