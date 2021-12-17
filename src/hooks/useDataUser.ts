import { useContext } from "react";
import DataUserContext from "../context/dataUserProvider";

const useDataUser = () => useContext(DataUserContext);

export default useDataUser;