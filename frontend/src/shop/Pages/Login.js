import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppButton from "../Components/Forms/AppButton";
import AppInput from "../Components/Forms/AppInput";
import Form from "../Components/Forms/Form";
import { useEffect } from "react";
import AppHeader from "../Components/AppHeader";
import AppSpinner from "../Components/AppSpinner";

import { useCookies } from "react-cookie";
import { asyncLoginAdmin, setAdmin } from "../Redux/Features/AdminSlice";
const Login = () => {
  const [name, setname] = useState();
  const [password, setUserPassword] = useState();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.admin);
  const [cookies, setCookie, removeCookies] = useCookies(["token"]);
  const handleLogin = async () => {
    dispatch(asyncLoginAdmin({ name, password, Navigate, toast }));
    setname("");
    setUserPassword("");
  };

  useEffect(() => {
    error && toast.error(error);
    if (cookies.token) {
      dispatch(setAdmin(cookies.token));
    } else {
      removeCookies("token");
    }
  }, [cookies, error, dispatch]);
  return (
    <section className="flex flex-col items-center">
      <AppHeader>User Login</AppHeader>
      <Form>
        <AppInput
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <AppInput
          type="text"
          placeholder="userPassword"
          value={password}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <AppButton onClick={handleLogin}>
          {loading ? <AppSpinner /> : "Login"}
        </AppButton>
      </Form>
    </section>
  );
};

export default Login;
