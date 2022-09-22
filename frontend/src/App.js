import React from "react";
import Index from "./shop/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Index />
      <ToastContainer />
    </>
  );
};

export default App;
