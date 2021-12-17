import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import responseApiDataUserGitHub from '../models/dataUser';
import getDataGitHubByName from '../services/getDataGitHubByName';

interface DataUserCtx {
  dataUser?: responseApiDataUserGitHub;
  isLoading?: boolean;
  getUserData?: (name: string) => void;
}

const DataUserContext = createContext<DataUserCtx>({});

export function DataUserProvider(props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<responseApiDataUserGitHub>({});

  async function getUserData(name:string) {
    setLoading(true);
    const data = await getDataGitHubByName(name);
    setDataUser(data);
    setLoading(false);
  }


  const valueProvider: DataUserCtx = {
    dataUser,
    isLoading,
    getUserData
  };

  return (
    <DataUserContext.Provider value={valueProvider}>
      {props.children}
    </DataUserContext.Provider>
  );
}

export default DataUserContext;
