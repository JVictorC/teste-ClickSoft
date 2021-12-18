import { useContext } from "react";
import contextHistorySearchUsersProps from "../context/historySearchUsers";

const useHistoryUser = () => useContext(contextHistorySearchUsersProps);

export default useHistoryUser;