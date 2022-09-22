import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProtectRoute from "./Components/AppProtectRoute";
import CustomerDetails from "./Components/CustomerDetails";
import Navbar from "./Components/Navbar";
import AddKhata from "./Pages/AddKhata";
import CreatePayments from "./Pages/CreatePayments";
import CreatePurchases from "./Pages/CreatePurchases";
import Customers from "./Pages/Customers";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ShowPayments from "./Pages/ShowPayments";
import ShowPurchases from "./Pages/ShowPurchases";
import { setAdmin, setAdminLogOut } from "./Redux/Features/AdminSlice";

const Index = () => {
  const { admin } = useSelector((state) => ({ ...state.admin }));
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const token = cookies.token;
  if (token) {
    const decodeToken = jwtDecode(token);
    if (decodeToken.exp * 1000 < new Date().getTime()) {
      removeCookie("token");
    }
  }

  // console.log({ token: token });

  useEffect(() => {
    if (cookies.token) {
      dispatch(setAdmin(cookies.token));
    } else {
      removeCookie("token");
      dispatch(setAdminLogOut());
    }
  }, [cookies]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route
            path="/"
            element={
              <AppProtectRoute>
                <p>wellcome to Home</p>
              </AppProtectRoute>
            }
          /> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/customers"
            element={
              <AppProtectRoute>
                <Customers />
              </AppProtectRoute>
            }
          />
          <Route
            path="/addkhata"
            element={
              <AppProtectRoute>
                <AddKhata />
              </AppProtectRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Registration />} /> */}
          <Route
            path="/customerDetails"
            element={
              <AppProtectRoute>
                <CustomerDetails />
              </AppProtectRoute>
            }
          />
          {/* customer details routes */}
          <Route
            path="/ShowPurchases"
            element={
              <AppProtectRoute>
                <ShowPurchases />
              </AppProtectRoute>
            }
          />
          <Route
            path="/ShowPayments"
            element={
              <AppProtectRoute>
                <ShowPayments />
              </AppProtectRoute>
            }
          />
          <Route
            path="/createPayments"
            element={
              <AppProtectRoute>
                <CreatePayments />
              </AppProtectRoute>
            }
          />
          <Route
            path="/createPurchases"
            element={
              <AppProtectRoute>
                <CreatePurchases />
              </AppProtectRoute>
            }
          />

          {/* page not found */}
          <Route path="*" element={<p>page Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
