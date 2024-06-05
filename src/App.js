import Routes from "routes";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequest } from "utils/helper";
import { userFetch } from "redux/actions";
const App = () => {
  const { login, userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const res = await apiRequest({ type: "get", path: `sign-up/${userId}` });
      const temp = { ...res.data };
      delete temp["password"];
      dispatch(userFetch(temp));
    };
    if (userId) {
      getUser();
    }
  }, [userId]);

  return (
    <>
      <Routes login={login} />
    </>
  );
};

export default App;
