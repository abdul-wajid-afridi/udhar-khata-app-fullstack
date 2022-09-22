import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomerDetailsCard from "../Components/CustomerDetailsCard";
import NoDataFound from "../Components/NoDataFound";
import { asyncGetCustomerPayments } from "../Redux/Features/PaymentsSlice";

const ShowPayments = () => {
  const { state } = useLocation();
  const { customerPayments } = useSelector((state) => state.payments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetCustomerPayments(state));
  }, [dispatch]);
  console.log(customerPayments);
  if (customerPayments?.result?.length < 1) return <NoDataFound />;
  return (
    <div>
      {customerPayments?.result?.map((it) => {
        return (
          <CustomerDetailsCard
            money={"Enter Amont"}
            date="Date"
            createdAt={it.createdAt}
            amount={it.enterAmount}
          />
        );
      })}
    </div>
  );
};

export default ShowPayments;
