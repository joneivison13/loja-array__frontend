import React, { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import GlobalStyle from './globalStyle';
import Route from './routes';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sotrageUser:any = localStorage.getItem("@USER")
  const user:any = JSON.parse(sotrageUser)

  useEffect(() => {
    if(user){
      toast.info(`Seja-bem vindo de volta ${user.user_name}`)
    }
  }, [])
  return (
    <>
      <GlobalStyle/>
      <Route/>
    </>
  );
}

export default App;
