import api from "../../utils/api";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveUsersActionCreator } from "../users/action";

function asyncPopulateUserAndThread() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThread();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUserAndThread };
