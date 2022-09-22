import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Styles/CustomerDetails.css";

import { base_url } from "../Config/UrlConfig";
import {
  asyncGetLastPayment,
  asyncGetPaidAmount,
} from "../Redux/Features/PaymentsSlice";
import { asyncGetTotalKhata } from "../Redux/Features/PurchasesSlice";
import {
  asyncGetAllKhatas,
  asyncGetRemaingAmount,
} from "../Redux/Features/CustomerKhataSlice";
import CustomerDetailsButtons from "./CustomerDetailsButtons";
import CustomerDetailsCard from "./CustomerDetailsCard";

const CustomerDetails = () => {
  const { allKhatas } = useSelector((state) => state.khatas);
  const { PaidAmount, lastPayemnts } = useSelector((state) => state.payments);
  const { totalAmount } = useSelector((state) => state.purchases);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const {
    id,
    customerName,
    address,
    cnicNo,
    customerPic,
    phoneNo1,
    phoneNo2,
    customerOccupation,
    totalAmount: total,
    paidAmount,
    remainingAmount,
  } = state;

  useEffect(() => {
    dispatch(asyncGetAllKhatas());
    dispatch(asyncGetPaidAmount(id));
    dispatch(asyncGetTotalKhata(id));
    dispatch(asyncGetRemaingAmount(id));
    dispatch(asyncGetLastPayment(id));
  }, [dispatch]);
  return (
    <>
      <section className="customer__details">
        <div className="flex flex-wrap gap-10">
          <img
            src={`${base_url}/${customerPic}`}
            className="h-[400px] sm:w-[400px] w-[100%]"
          />
        </div>
        <div className="customer__details__info">
          <p>Name : {customerName}</p>
          <p>cnicNo : {cnicNo}</p>
          <p>phoneNo1 : {phoneNo1}</p>
          <p>phoneNo2 : {phoneNo2}</p>
          <p>address : {address}</p>
          <p>customerOccupation : {customerOccupation}</p>
          <p>remainingAmount : {remainingAmount}</p>
          <p>total : {total}</p>
          <p>paidAmount : {paidAmount}</p>
        </div>
        <div>
          <CustomerDetailsButtons id={id} />
        </div>
      </section>
      <div>
        <p className="customer__headings">Last Payments</p>
        {lastPayemnts?.data?.map((it) => {
          return (
            <CustomerDetailsCard
              money={"Amount"}
              amount={it.enterAmount}
              date="Date"
              createdAt={it.createdAt}
            />
          );
        })}
      </div>
    </>
  );
};

export default CustomerDetails;
