import { Outlet, useNavigate } from "react-router-dom";
import "./styles/main.scss"
import Sidebar from "./layouts/Sidebar";
import { useEffect, useState } from "react";

const baseApi = 'http://localhost:3000/api';

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true);
    }else
      navigate('/login');
  }, []);

  return (
    <>
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
