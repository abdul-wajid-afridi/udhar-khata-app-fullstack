import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { asyncGetCustomerPurchases } from "../Redux/Features/PurchasesSlice";
import moment from "moment";
import NoDataFound from "../Components/NoDataFound";
import CustomerDetailsCard from "../Components/CustomerDetailsCard";

const ShowPurchases = () => {
  const { state } = useLocation();
  const { customerPurchases } = useSelector((state) => state.purchases);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetCustomerPurchases(state));
  }, [dispatch]);
  if (customerPurchases?.result?.length < 1) return <NoDataFound />;
  console.log(customerPurchases);
  return (
    <div>
      {customerPurchases?.result?.map((it) => {
        return (
          <CustomerDetailsCard
            products={it.products}
            title={"products"}
            money="amount"
            amount={it.amount}
            date="Date"
            createdAt={it.createdAt}
          />
        );
      })}
    </div>
  );
};

export default ShowPurchases;
