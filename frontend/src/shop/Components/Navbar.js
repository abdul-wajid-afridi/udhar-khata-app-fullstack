import React, { useState } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import "./Styles/Navbar.css";
import { FaHackerNews, FaHamburger, FaShopware, FaTimes } from "react-icons/fa";
// import { logOutUser, selectUser } from "../Redux/reduxSlices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin, setAdminLogOut } from "../Redux/Features/AdminSlice";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const dispatch = useDispatch();
  const [Menu, setMenu] = useState(false);
  const [cookies, setCookie, removeCookies] = useCookies(["token"]);

  const { admin } = useSelector((state) => state.admin);

  const handleLogout = () => {
    removeCookies("token");
    dispatch(setAdminLogOut());
    cookies.remove("token");
  };
  return (
    <section className="navbar__container">
      <nav
        onClick={() => setMenu(!Menu)}
        className={Menu ? "navbar__menu navbar__active" : "navbar__menu"}
      >
        <Link className="navbar__items" to={"/"}>
          <FaShopware className="navbar__logo" />
        </Link>
        <Link className="navbar__items" to={"/"}>
          Home
        </Link>

        {admin ? (
          <>
            <Link className="navbar__items" to={"/customers"}>
              Customers
            </Link>
            <Link className="navbar__items" to={"/addkhata"}>
              Add khata
            </Link>
            <Link
              className="navbar__items"
              onClick={handleLogout}
              to={"/login"}
            >
              log out
            </Link>
          </>
        ) : (
          <>
            <Link className="navbar__items" to={"/login"}>
              Login
            </Link>
          </>
        )}
      </nav>
      <div className="navbar__icons" onClick={() => setMenu(!Menu)}>
        {Menu ? <FaHamburger /> : <FaTimes />}
      </div>
    </section>
  );
};

export default Navbar;
