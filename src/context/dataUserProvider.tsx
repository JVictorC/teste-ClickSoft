import notFound from '@models/notFound';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import useHistoryUser from 'src/hooks/useHistoryUsers';
import responseApiDataUserGitHub, { dataUserGitHub } from '../models/dataUser';
import getDataGitHubByName from '../services/getDataGitHubByName';

interface DataUserCtx {
  dataUser?: dataUserGitHub;
  isLoading?: boolean;
  getUserData?: (name: string) => void;
}

const DataUserContext = createContext<DataUserCtx>({});

export function DataUserProvider(props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<dataUserGitHub>();

  const { setNewUserInHistory } = useHistoryUser();

  async function getUserData(name: string) {
    setLoading(true);
    try {
      const data = await getDataGitHubByName(name);
      setDataUser(data);
      setNewUserInHistory(data);
    } catch (error) {
      alert('O Nome tem que ser um nome valido');
    }
    setLoading(false);
  }

  const valueProvider: DataUserCtx = {
    dataUser,
    isLoading,
    getUserData,
  };

  return (
    <DataUserContext.Provider value={valueProvider}>
      {props.children}
    </DataUserContext.Provider>
  );
}

export default DataUserContext;
